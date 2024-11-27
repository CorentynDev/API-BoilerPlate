// Import du service à tester
const exampleService = require('../../src/services/exampleService');

describe('ExampleService Unit Tests', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Nettoie les mocks après chaque test
    });

    it('should process valid data correctly', () => {
        const input = { name: 'Test User' };
        const result = exampleService.processData(input);

        expect(result).toEqual({
            success: true,
            message: 'Data processed for Test User',
        });
    });

    it('should throw an error for invalid data', () => {
        expect(() => {
            exampleService.processData(null);
        }).toThrow('Invalid input data');
    });

    it('should return default value if no name is provided', () => {
        const input = {};
        const result = exampleService.processData(input);

        expect(result).toEqual({
            success: true,
            message: 'Data processed for Unknown',
        });
    });
});
