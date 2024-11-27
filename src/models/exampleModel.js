const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schéma Mongoose pour un utilisateur.
 * Ce schéma définit les champs nécessaires pour un utilisateur.
 */
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Permet de garder trace des dates de création et de mise à jour
    }
);

// Création et exportation du modèle User
module.exports = mongoose.model('User', userSchema);
