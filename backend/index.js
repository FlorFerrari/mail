const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // Añade esta línea para usar path.join
require('dotenv').config(); // Cargar las variables de entorno

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));


const text = `Soy un alma desnuda en estos versos,
Alma desnuda que angustiada y sola
Va dejando sus pétalos dispersos.

Alma que puede ser una amapola,
Que puede ser un lirio, una violeta,
Un peñasco, una selva y una ola.

Alma que como el viento vaga inquieta
Y ruge cuando está sobre los mares,
Y duerme dulcemente en una grieta.

Alma que adora sobre sus altares,
Dioses que no se bajan a cegarla;
Alma que no conoce valladares.

Alma que fuera fácil dominarla
Con sólo un corazón que se partiera
Para en su sangre cálida regarla.

Alma que cuando está en la primavera
Dice al invierno que demora: vuelve,
Caiga tu nieve sobre la pradera.

Alma que cuando nieva se disuelve
En tristezas, clamando por las rosas
con que la primavera nos envuelve.

Alma que a ratos suelta mariposas
A campo abierto, sin fijar distancia,
Y les dice: libad sobre las cosas.

Alma que ha de morir de una fragancia
De un suspiro, de un verso en que se ruega,
Sin perder, a poderlo, su elegancia.

Alma que nada sabe y todo niega
Y negando lo bueno el bien propicia
Porque es negando como más se entrega.

Alma que suele haber como delicia
Palpar las almas, despreciar la huella,
Y sentir en la mano una caricia.

Alma que siempre disconforme de ella,
Como los vientos vaga, corre y gira;
Alma que sangra y sin cesar delira
Por ser el buque en marcha de la estrella.`;

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
        subject: 'Poema de Alfonsina Storni',
        text: text
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
