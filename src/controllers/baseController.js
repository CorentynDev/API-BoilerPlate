/**
 * Classe de base pour les contrôleurs.
 * Contient des méthodes communes pour envoyer des réponses et gérer les erreurs.
 */
class BaseController {

    /**
     * Méthode pour envoyer une réponse réussie.
     * @param {Object} res - Objet de réponse Express
     * @param {Object} data - Données à envoyer dans la réponse
     * @param {string} message - Message à envoyer dans la réponse
     * @param {number} statusCode - Code de statut HTTP (par défaut 200)
     */
    sendResponse(res, data, message = 'Success', statusCode = 200) {
        return res.status(statusCode).json({
            status: 'success',
            message,
            data,
        });
    }

    /**
     * Méthode pour gérer une erreur.
     * @param {Object} res - Objet de réponse Express
     * @param {Error} error - L'erreur qui doit être envoyée dans la réponse
     * @param {number} statusCode - Code de statut HTTP (par défaut 500)
     */
    handleError(res, error, statusCode = 500) {
        return res.status(statusCode).json({
            status: 'error',
            message: error.message || 'Internal Server Error',
        });
    }
}

module.exports = BaseController;
