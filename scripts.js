document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'nicolsita' && password === '020425') {
        window.location.href = 'welcome.html'; // Redirige a otra página
    } else {
        if (username !== 'nicolsita') {
            alert('Pista para el usuario: "Como te digo por tu primer nombre".');
        }
        if (password !== '020425') {
            alert('Pista para la contraseña: "El día que empezamos a hablar por WhatsApp".');
        }
    }
});