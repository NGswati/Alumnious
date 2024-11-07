// Add an event listener to the "Update Profile" button
var updateButtons = document.querySelectorAll('.update-button button');
updateButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var profile = this.closest('.profile');
        var name = profile.querySelector('h1#name').textContent;
        var graduationYear = profile.querySelector('p#graduation-year').textContent;
        var branch = profile.querySelector('p#branch').textContent;
        var company = profile.querySelector('p#company').textContent;
        var contactInfo = profile.querySelector('p#contact-info').textContent;
        var employmentHistory = profile.querySelector('p#employment-history').textContent;
        var additionalInfo = profile.querySelector('p#additional-info').textContent;

        // Pass the profile data to the registration page
        localStorage.setItem('name', name);
        localStorage.setItem('graduationYear', graduationYear);
        localStorage.setItem('branch', branch);
        localStorage.setItem('company', company);
        localStorage.setItem('contactInfo', contactInfo);
        localStorage.setItem('employmentHistory', employmentHistory);
        localStorage.setItem('additionalInfo', additionalInfo);

        // Redirect to the registration page
        window.location.href = 'registrationpage.html';
    });
});
