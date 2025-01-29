const validateUserData = (userData) => {
    // Required fields for welcome email
    const requiredFields = ['USERID', 'EMAIL', 'FIRST_NAME', 'LAST_NAME', 'ACCEPT_NEWSLETTER'];

    // Check for missing fields
    for (const field of requiredFields) {
        if (!userData[field]) {
            return {
                isValid: false,
                error: `Missing required field: ${field}`
            };
        }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.EMAIL)) {
        return {
            isValid: false,
            error: 'Invalid email format'
        };
    }

    // Check newsletter consent
    if (!userData.ACCEPT_NEWSLETTER) {
        return {
            isValid: false,
            error: 'User has not accepted newsletter'
        };
    }

    return { isValid: true };
};

module.exports = {
    validateUserData
};