const nodemailer = require('nodemailer');

/**
 * Envoie un email.
 *
 * @param {String} to - Destinataire de l'email.
 * @param {String} subject - Sujet de l'email.
 * @param {String} htmlContent - Contenu HTML de l'email.
 * @returns {Promise<void>} - Promesse résolue une fois l'email envoyé.
 */
const sendEmail = async (to, subject, htmlContent) => {
    // Configurer un transporteur d'email (ici SMTP par exemple)
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.example.com',
        port: process.env.EMAIL_PORT || 587,
        auth: {
            user: process.env.EMAIL_USER || 'your-email@example.com',
            pass: process.env.EMAIL_PASS || 'your-email-password',
        },
    });

    // Configurer et envoyer l'email.
    const mailOptions = {
        from: process.env.EMAIL_FROM || '"Mon API" <no-reply@example.com>',
        to,
        subject,
        html: htmlContent,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email envoyé à : ${to}`);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        throw new Error('Impossible d\'envoyer l\'email.');
    }
};

module.exports = sendEmail;
