// contact_script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // You can add form validation or other processing logic here if needed

        // Show the thank you message
        thankYouMessage.style.display = 'block';

        // Optionally, reset the form
        form.reset();

        // Hide the thank you message after a few seconds (optional)
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
        }, 5000);
    });
});
