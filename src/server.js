const app = require('./app');
const connectDB = require('./config/db');
const config = require('./config/env');
const logger = require('./config/logger');

connectDB();

app.listen(config.port, () => {
    logger.info(`Serveur lancé sur http://localhost:${config.port}`);
});
