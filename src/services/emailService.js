const transporter = require('../config/email.config');

class EmailService {
    async sendWelcomeEmail(userData) {
        try {
            const emailContent = this.getWelcomeEmailTemplate(userData);
            const info = await transporter.sendMail(emailContent);
            console.log('Welcome email sent successfully:', info.messageId);
            return { success: true, messageId: info.messageId };
        } catch (error) {
            console.error('Error sending welcome email:', error);
            return { success: false, error: error.message };
        }
    }

    getWelcomeEmailTemplate(userData) {
        return {
            from: {
                name: 'Prenups.AI',
                address: process.env.EMAIL_USER
            },
            to: userData.EMAIL,
            subject: `Welcome to Prenups.AI`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: white;">
                    <div style="margin-bottom: 30px;">
                        <h1 style="color: #18214D; font-size: 24px;">PRENUPS.AI</h1>
                    </div>
                    
                    <p style="color: #18214D; font-size: 16px; margin-bottom: 20px;">Hi ${userData.FIRST_NAME},</p>
                    
                    <p style="color: #4B5563; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                        Welcome to Prenups.AI! We're here to help you create your prenuptial agreement in a quick, affordable, and stress-free way.
                    </p>

                    <div style="margin: 30px 0; padding: 20px; background-color: #F8FAFC; border-radius: 8px;">
                        <ul style="color: #4B5563; font-size: 16px; list-style-type: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 10px;">✓ Customized to fit your unique needs</li>
                            <li style="margin-bottom: 10px;">✓ Complete your prenup in less than 20 minutes</li>
                            <li style="margin-bottom: 10px;">✓ Designed to secure your future together</li>
                        </ul>
                    </div>

                    <a href="[Your Dashboard URL]" style="display: inline-block; background-color: #4F7BFE; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px;">Create your Prenup</a>
                    
                    <div style="margin-top: 30px; padding-top: 20px; color: #6B7280; font-size: 14px;">
                        <p>Best regards,<br>The Prenups.AI Team</p>
                    </div>
                </div>
            `,
            text: `
Hi ${userData.FIRST_NAME},

Welcome to Prenups.AI! We're here to help you create your prenuptial agreement in a quick, affordable, and stress-free way.

✓ Customized to fit your unique needs
✓ Complete your prenup in less than 20 minutes
✓ Designed to secure your future together

Best regards,
The Prenups.AI Team
            `
        };
    }
}

module.exports = new EmailService();