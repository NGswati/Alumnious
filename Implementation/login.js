// Get form elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupLink = document.getElementById('signup-link');

// Event listener for form submission
loginForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate input (you can add your own validation logic here)

    // Simulate login request (replace with actual API call)
    simulateLoginRequest(email, password);
});

// Event listener for signup link
signupLink.addEventListener('click', e => {
    e.preventDefault(); // Prevent default link behavior

    // Redirect to signup page (replace with your own signup page URL)
    window.location.href = 'signup.html';
});

// Simulate login request (replace with your own backend integration)
function simulateLoginRequest(email, password) {
    // Display loading spinner or other feedback to indicate login process

    // Simulate API call with a delay
    setTimeout(() => {
        // Check credentials (replace with your own authentication logic)
        if (email === 'example@example.com' && password === 'password') {
            // Successful login, redirect to dashboard or home page
            window.location.href = 'dashboard.html';
        } else {
            // Invalid credentials, display error message or show login failure feedback
            alert('Invalid email or password. Please try again.');
        }
    }, 2000); // Simulate 2 seconds delay (adjust as needed)
}
