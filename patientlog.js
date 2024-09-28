document.addEventListener('DOMContentLoaded', function () {
    // Patient Sign Up Form Handling
    const signupForm = document.getElementById('patient-signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('patient-name').value;
            const email = document.getElementById('patient-email').value;
            const username = document.getElementById('patient-username').value;
            const patientId = document.getElementById('patient-id').value;
            const password = document.getElementById('patient-password').value;
            const confirmPassword = document.getElementById('patient-confirm-password').value;

            // Simple validation
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Store credentials in local storage (for demo purposes only, do not use in production)
            localStorage.setItem('patient-username', username);
            localStorage.setItem('patient-password', password);

            // Show confirmation message
            const confirmationMessage = document.getElementById('confirmation-message');
            if (confirmationMessage) {
                confirmationMessage.style.display = 'block';
            }

            // Redirect to login page after a delay
            setTimeout(() => {
                window.location.href = 'patient_login.html'; // Redirect to login page
            }, 2000); // 2 seconds delay
        });
    }
});


