const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path'); // Añade esta línea para usar path.join
require('dotenv').config(); // Cargar las variables de entorno

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));


const text = `El día que murió mi madre yo tenía catorce
años. En ese instante no supe que mi vida había
cambiado para siempre. Hubo días en que lloraba
sin motivo. Otros, creía que no había sucedido.
Me engañaba a mí mismo diciendo que debía
ir al sanatorio donde estaba internada, como lo
había hecho durante meses.

Mi madre, llamada Luisa, era más bien baja y de
pelo ondulado. Su única profesión fue ser ama
de casa. Durante años la recordé planchando los
sacos de mi uniforme escolar. Más de una vez
sentí la necesidad de tenerla a mi lado para leerle
libros que ella nunca había leído. Para contarle
cómo era el cine y qué pasaba en el mundo fuera
del cuarto en el que murió.

Nada de eso ocurrió. La ausencia se convirtió
en mi condición: ser huérfano. Los recuerdos
borrosos que tengo, como una fotografía que se
está revelando, son de la playa. Mientras vivió
pasábamos dos semanas por año en Mar del Plata.

A los dieciocho años intenté vivir mi propia vida.
Al mismo tiempo comencé a escribir este libro
que se convirtió en una partida sin llegada. Lo
terminé en el 2012 en una noche de tantas que
nos quedábamos charlando con una de mis hijas.
En el momento en que la oscuridad se estaba
yendo porque estaba saliendo el sol, me dijo:
«Papá, terminalo». Y así fue. Escribí el último
poema y di por finalizado un texto que logró el
milagro de pensar en su muerte sin angustia.
Hoy, ya un hombre maduro, pude aceptar
que nunca más la vería. Tuve por un instante
la fantasía loca de que en algún lugar de la
eternidad nos íbamos a encontrar. Eso no
sucederá pero está pasando algo que es
maravilloso. La recuerdo en los días felices que
estuvimos juntos. Entre su muerte y el tramo final
de mi vida hay más dicha que desdicha.
Decir que es un libro no es la verdad exacta. Tiene
el formato de un libro pero el contenido real es
una oración. Cada palabra que escribí me hizo
más fuerte. A mis ochenta años soy el hombre
que siempre soñé ser. Fui educado en el amor. En
el amor de ella y de quienes la reemplazaron. La
perdí demasiado pronto pero la recupero cada día.

La Plata, 20 de mayo de 2021`;

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
        subject: 'Poema inconcluso para Luisa Pazos de Luiz Pazos',
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
