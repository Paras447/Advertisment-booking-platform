document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Book Now" buttons
    const bookButtons = document.querySelectorAll('.book-button');

    // Add click event listener to each button
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Display a thank you message
            alert("Thank you for booking your advertisement!");
        });
    });
});
