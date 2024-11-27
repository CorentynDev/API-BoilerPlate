const request = require('supertest');
const app = require('../../src/app'); // Application Express
const mongoose = require('mongoose');
const ExampleModel = require('../../src/models/exampleModel');

describe('Example Routes Integration Tests', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.TEST_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await ExampleModel.deleteMany({}); // Nettoie la collection
        await mongoose.connection.close(); // Ferme la connexion à la DB
    });

    it('should create a new example resource', async () => {
        const newExample = { name: 'Integration Test' };

        const response = await request(app)
            .post('/api/v1/example')
            .send(newExample);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({
            success: true,
            data: { name: 'Integration Test' },
        });

        // Vérifie la persistance dans la base de données
        const savedExample = await ExampleModel.findOne({ name: 'Integration Test' });
        expect(savedExample).not.toBeNull();
    });

    it('should return a list of examples', async () => {
        const response = request(app).get('/api/v1/example');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body.data).toBeInstanceOf(Array);
    });
});
