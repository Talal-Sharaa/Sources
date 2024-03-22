// Get all nav links
var navLinks = document.querySelectorAll('.navbar a');

// Loop through links
for (var i = 0; i < navLinks.length; i++) {
    // Remove active class from all items
    navLinks[i].classList.remove('active');

    // Check if link href matches current page URL
    if (navLinks[i].getAttribute('href') === '.' + window.location.pathname) {
        // Add active class
        navLinks[i].classList.add('active');
    }
}