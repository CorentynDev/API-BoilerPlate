const Joi = require('joi');

/**
 * Middleware pour valider les données d'une requête.
 *
 * @param {Object} schema - Schéma de validation (par exemple avec Joi).
 * @returns {Function} Middleware Express.
 */
const validateMiddleware = (schema) => (req, res, next) => {
    // Valider les données de la requête en utilisant le schéma fourni.
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        // Si validation échoue, retourner un tableau d'erreurs.
        return res.status(400).json({
            status: 'fail',
            errors: error.details.map((detail) => detail.message),
        });
    }

    // Si validation réussie, passer au middleware suivant.
    next();
};

module.exports = validateMiddleware;
