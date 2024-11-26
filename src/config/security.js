const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

const applySecurityMiddlewares = (app) => {
    app.use(helmet());
    app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
    app.use(mongoSanitize());
    app.use(xss());

    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    });
    app.use(limiter);
};

module.exports = applySecurityMiddlewares;
