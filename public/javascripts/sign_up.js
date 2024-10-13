// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const roleButtons = document.querySelectorAll('.role-btn');
    const signupForm = document.getElementById('signup-form');
    
    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Show the signup form when a role is selected
            signupForm.style.display = 'flex';
            const selectedRole = button.innerText;
            console.log(`Selected role: ${selectedRole}`);
        });
    });

    // Simulated social login buttons
    document.getElementById('google-btn').addEventListener('click', () => {
        alert('Google login not implemented');
    });

    document.getElementById('facebook-btn').addEventListener('click', () => {
        alert('Facebook login not implemented');
    });

    document.getElementById('linkedin-btn').addEventListener('click', () => {
        alert('LinkedIn login not implemented');
    });

    // Handle form submission
    document.getElementById('submit-btn').addEventListener('click', (event) => {
        event.preventDefault();
        // Capture user input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (name && email && password) {
            alert(`Welcome, ${name}! You have signed up as ${document.querySelector('.role-btn.active').innerText}.`);
            // Here you would typically send this data to your server
        } else {
            alert('Please fill in all fields.');
        }
    });
});