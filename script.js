// Password visibility toggle for login and registration forms
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    if (confirmPasswordField) {
        confirmPasswordField.type = type;
    }
}

// Simple form validation for registration and login forms
function validateForm(formId) {
    const form = document.getElementById(formId);
    const email = form.querySelector('[name="email"]').value;
    const password = form.querySelector('[name="password"]').value;
    const confirmPassword = form.querySelector('[name="confirm_password"]') ? form.querySelector('[name="confirm_password"]').value : null;
    
    if (!email || !password) {
        alert('Please fill in all required fields.');
        return false;
    }

    if (confirmPassword && password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    return true;
}

// Auto-hide alert after some time
function hideAlert() {
    setTimeout(function () {
        const alerts = document.querySelectorAll(".alert");
        alerts.forEach(function(alert) {
            alert.style.display = 'none';
        });
    }, 5000); // Hide alert after 5 seconds
}

// Call hideAlert on page load if there are any flash messages
window.onload = hideAlert;
