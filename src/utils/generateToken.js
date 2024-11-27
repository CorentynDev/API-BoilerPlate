const jwt = require('jsonwebtoken');

/**
 * Génère un token JWT.
 *
 * @param {Object} payload - Données que le token doit contenir.
 * @param {String} secret - Clé secrète pour signer le token.
 * @param {Object} options - Options supplémentaires pour le token (ex : durée de vie).
 * @returns {String} - Le token signé.
 */
const generateToken = (payload, secret, options = { expiresIn: '1h' }) => {
    try {
        // Crée un token signé en utilisant les données, la clé secrète et les options fournies.
        return jwt.sign(payload, secret, options);
    } catch (error) {
        throw new Error('Erreur lors de la génération du token.');
    }
};

module.exports = generateToken;
