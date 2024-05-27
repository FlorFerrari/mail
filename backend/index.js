const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // Añade esta línea para usar path.join
require('dotenv').config(); // Cargar las variables de entorno

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.post('/send-email', (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Correo de Prueba',
        text: 'Este es un correo de prueba enviado desde nuestra aplicación web.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al enviar el correo.' });
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).json({ message: 'Correo enviado exitosamente.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
