const { filterXSS } = require('xss');

/**
 * Middleware personnalisé pour nettoyer les entrées utilisateur contre les attaques XSS.
 *
 * @returns {Function} Middleware Express pour assainir les données.
 */
const sanitizeMiddleware = () => (req, res, next) => {
    // Fonction pour nettoyer récursivement un objet.
    const sanitizeObject = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    if (typeof obj[key] === 'object') {
                        sanitizeObject(obj[key]);
                    } else if (typeof obj[key] === 'string') {
                        obj[key] = filterXSS(obj[key]); // Nettoyer les chaînes de caractères.
                    }
                }
            }
        }
    };

    // Nettoyer req.body, req.query et req.params.
    sanitizeObject(req.body);
    sanitizeObject(req.query);
    sanitizeObject(req.params);

    next();
};

module.exports = sanitizeMiddleware;
