function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}
