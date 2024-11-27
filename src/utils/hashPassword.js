const bcrypt = require('bcrypt');

/**
 * Hash un mot de passe avec bcrypt.
 * @param {string} password - Le mot de passe à hasher
 * @returns {Promise} - Le mot de passe hashé
 */
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

module.exports = hashPassword;
