function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
    page.style.display = "none";
  });

  // Show selected page
  document.getElementById(pageId).style.display = "block";
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// 1. Mouse Click: Change text when clicked, unable to reset it once its clicked
let button = document.getElementById('darkmode-btn');
button.addEventListener('click', function changeText() {
  button.textContent="Dark/Light Mode";
});

// 10. Horizontal Scroll Event: Scroll content horizontally
let scrollContent = document.getElementById('scrollContent');

scrollContent.addEventListener('wheel', function(event) {
  if (event.deltaY !==0) {
      event.preventDefault();
      scrollContent.scrollLeft += event.deltaY;
  }
}, { passive: false});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formStatus").textContent = "Message sent! Thank you.";
    // Optionally, clear form
    this.reset();
  } else {
    document.getElementById("formStatus").textContent = "Please fill in all fields.";
  }
});