const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const emailController = require('./controllers/emailController');

const app = express();

app.use(express.json());

// Welcome email endpoint
app.post('/api/email/welcome', emailController.handleWelcomeEmail);

// Rota básica de teste
app.get('/', (req, res) => {
  res.json({ message: 'Welcome Email System - Online' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

console.log('Verificando configurações de email:');
console.log('EMAIL_USER está definido:', !!process.env.EMAIL_USER);
console.log('EMAIL_APP_PASSWORD está definido:', !!process.env.EMAIL_APP_PASSWORD);