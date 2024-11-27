const BaseController = require('./baseController');
const UserService = require('../services/exampleService');

/**
 * Contrôleur pour les utilisateurs.
 * Hérite de BaseController pour la gestion des réponses et des erreurs.
 */
class UserController extends BaseController {

    /**
     * Récupère tous les utilisateurs.
     * @param {Object} req - Objet de la requête Express
     * @param {Object} res - Objet de la réponse Express
     */
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            this.sendResponse(res, users);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    /**
     * Crée un nouvel utilisateur.
     * @param {Object} req - Objet de la requête Express
     * @param {Object} res - Objet de la réponse Express
     */
    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            this.sendResponse(res, user, 'User created successfully', 201);
        } catch (error) {
            this.handleError(res, error);
        }
    }
}

module.exports = new UserController();
