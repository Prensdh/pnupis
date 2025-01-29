const emailService = require('../services/emailService');
const { validateUserData } = require('../utils/validators');

class EmailController {
    async handleWelcomeEmail(req, res) {
        try {
            // Get user data from request
            const userData = req.body;

            // Validate the incoming data
            const validationResult = validateUserData(userData);
            if (!validationResult.isValid) {
                return res.status(400).json({
                    success: false,
                    error: validationResult.error
                });
            }

            // Send welcome email
            const result = await emailService.sendWelcomeEmail(userData);
            
            // Return response based on email sending result
            if (result.success) {
                return res.status(200).json({
                    success: true,
                    messageId: result.messageId,
                    message: 'Welcome email sent successfully'
                });
            } else {
                return res.status(500).json({
                    success: false,
                    error: result.error
                });
            }
        } catch (error) {
            console.error('Error in welcome email controller:', error);
            return res.status(500).json({
                success: false,
                error: 'Internal server error'
            });
        }
    }
}

module.exports = new EmailController();