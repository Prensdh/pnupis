const getWelcomeEmailTemplate = (userData) => {
    return {
        subject: `Welcome ${userData.FIRST_NAME}!`,
        text: `
Hello ${userData.FIRST_NAME} ${userData.LAST_NAME},

We're so glad to have you with us!

Best regards,
Support Team
        `,
        html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { padding: 20px; }
        .header { color: #333; }
        .content { line-height: 1.6; }
        .footer { margin-top: 20px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="header">Welcome ${userData.FIRST_NAME}!</h2>
        <div class="content">
            <p>Hello ${userData.FIRST_NAME} ${userData.LAST_NAME},</p>
            <p>We're so glad to have you with us!</p>
        </div>
        <div class="footer">
            <p>Best regards,<br>Support Team</p>
        </div>
    </div>
</body>
</html>
        `
    };
};

module.exports = {
    getWelcomeEmailTemplate
};