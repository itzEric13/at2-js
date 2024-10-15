const form = document.getElementById('registrationForm');
const registerBtn = document.getElementById('register-btn');
let attemptCount = 0; // Contador de tentativas

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate form inputs
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (password.length !== 8 || (password.match(/\d/g) || []).length < 2) {
        alert('Sua Senha deve conter 8 caracteres, com pelo menos 2 números.');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    // Incrementar o contador de tentativas
    attemptCount++;

    // Verificar se atingiu o limite de tentativas
    if (attemptCount >= 50) {
        // Desabilitar campos do formulário e atualizar o texto do botão
        form.querySelectorAll('input').forEach((input) => {
            input.disabled = true;
        });
        registerBtn.textContent = 'Unlocker';
        alert('O formulário foi desbloqueado após 50 tentativas.');
        attemptCount = 0; // Resetar contador se necessário
    } else {
        alert(`Tentativa ${attemptCount} registrada.`);
    }

    // Simulate storing user data
    console.log('Registering user:', { username, email, password });
});
