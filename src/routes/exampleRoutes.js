const express = require('express');
const UserController = require('../controllers/exampleController');

const router = express.Router();

// Route pour récupérer tous les utilisateurs
router.get('/', UserController.getAllUsers);

// Route pour créer un utilisateur
router.post('/', UserController.createUser);

module.exports = router;
