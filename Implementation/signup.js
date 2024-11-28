// Get form element
const signupForm = document.getElementById('signup-form');

// Event listener for form submission
signupForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input (you can add your own validation logic here)

    // Simulate signup request (replace with actual API call)
    simulateSignupRequest(name, email, password);
});

// Simulate signup request (replace with your own backend integration)
function simulateSignupRequest(name, email, password) {
    // Display loading spinner or other feedback to indicate signup process

    // Simulate API call with a delay
    setTimeout(() => {
        // Process signup data (replace with your own signup logic)
        console.log('Signup successful!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        // Redirect to login page or show success message
        window.location.href = 'login.html';
    }, 2000); // Simulate 2 seconds delay (adjust as needed)
}
