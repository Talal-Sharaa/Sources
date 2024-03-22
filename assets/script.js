// Get all nav links
const navLinks = document.querySelectorAll(".navbar a");

// Get current URL path and filename
const page = window.location.pathname.split("/").pop();

// Loop through links
navLinks.forEach((link) => {
  // Remove active class from all items
  link.classList.remove("active");

  // Check if link href matches current page URL
  if (link.getAttribute("href").split("/").pop() == page) {
    // Add active class
    link.classList.add("active");
  }
});
