document.getElementById('sendEmailButton').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');
    
    if (email) {
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const result = await response.json();
            
            if (response.ok) {
                messageElement.textContent = 'Correo enviado exitosamente.';
                messageElement.style.color = 'green';
            } else {
                messageElement.textContent = 'Error al enviar el correo: ' + result.message;
                messageElement.style.color = 'red';
            }
        } catch (error) {
            console.error('Error:', error);
            messageElement.textContent = 'Error al enviar el correo.';
            messageElement.style.color = 'red';
        }
    } else {
        messageElement.textContent = 'Por favor, ingresa un correo electrónico.';
        messageElement.style.color = 'red';
    }
});
