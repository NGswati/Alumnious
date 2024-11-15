// Get form element
const registrationForm = document.getElementById('registration-form');

// Event listener for form submission
registrationForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const graduationYear = document.getElementById('graduation-year').value;
    const major = document.getElementById('major').value;
    const employment = document.getElementById('employment').value;
    const additionalData = document.getElementById('additional-data').value;

    // Validate input (you can add your own validation logic here)

    // Simulate registration request (replace with actual API call)
    simulateRegistration(name, email, password, graduationYear, major, employment, additionalData);
});

// Simulate registration request (replace with your own backend integration)
function simulateRegistration(name, email, password, graduationYear, major, employment, additionalData) {
    // Simulate API request delay (2 seconds)
    setTimeout(() => {
        // Process the registration (replace with your own logic)
        console.log('Registration successful!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Graduation Year:', graduationYear);
        console.log('Major:', major);
        console.log('Employment History:', employment);
        console.log('Additional Data:', additionalData);

        // Show success message or redirect to a confirmation page
        alert('Registration successful!');
    }, 2000);
}
