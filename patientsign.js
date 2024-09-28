document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('patient-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('patient-login-username').value;
            const password = document.getElementById('patient-login-password').value;

            const storedUsername = localStorage.getItem('patient-username');
            const storedPassword = localStorage.getItem('patient-password');

            if (username === storedUsername && password === storedPassword) {
                alert('Login Successful!');
                // Redirect to patient.html
                window.location.href = 'patient.html'; 
            } else {
                alert('Invalid Username or Password');
            }
        });
    }
});
