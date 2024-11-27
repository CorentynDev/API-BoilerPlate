const jwt = require('jsonwebtoken');
const appConfig = require('../config/app');

/**
 * Middleware pour vérifier l'authentification via JWT.
 * Si le token est valide, l'utilisateur est attaché à la requête.
 */
const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Access denied, no token provided' });
    }

    jwt.verify(token, appConfig.jwt.secret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next(); // Passe à la route suivante si le token est valide
    });
};

module.exports = authenticateJWT;
