const form = document.getElementById('login-form-usuario');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log(username)
            console.log(password)

            try {
                //http://localhost:3009/api/login
                const response = await fetch('http://localhost:3009/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                    
                });

                console.log(response)
                
                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token);
                    window.location.href = 'http://127.0.0.1:5500/front/pages/archivos.html'; // Redirige al panel de control
                } else {
                    const errorData = await response.json();
                    const errorElement = document.getElementById('error-message');
                    errorElement.textContent = errorData.error; // Muestra el mensaje de error en el elemento HTML
                }
                
            } catch (err) {
                console.error('Error al enviar la solicitud:', err);
                alert('Error al enviar la solicitud');
            }
        });
