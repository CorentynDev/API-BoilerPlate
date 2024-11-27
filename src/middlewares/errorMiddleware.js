// Middleware pour gérer les erreurs globales de l'application.
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorHandler;
