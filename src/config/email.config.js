const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Garante que as variáveis de ambiente são carregadas
dotenv.config();

// Cria o transportador com configurações específicas do Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    },
    debug: true // Isso nos ajudará a ver mais detalhes sobre a conexão
});

// Adiciona uma verificação de conexão que nos ajudará a diagnosticar problemas
transporter.verify(function(error, success) {
    if (error) {
        console.log('Erro na configuração do email:', error);
        console.log('Credenciais utilizadas:', {
            user: process.env.EMAIL_USER,
            // Não logamos a senha por questões de segurança
            hasPassword: !!process.env.EMAIL_APP_PASSWORD
        });
    } else {
        console.log('Servidor de email está pronto para enviar mensagens');
    }
});

module.exports = transporter;