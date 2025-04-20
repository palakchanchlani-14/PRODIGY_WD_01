// Change navbar style on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });
  
  // Contact form submit success message
  const form = document.querySelector("form");
  const successMsg = document.getElementById("success-message");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission (no backend)
    
    form.reset(); // Clear the form fields
    
    successMsg.style.display = "block"; // Show success message
    
    // Hide the message after 5 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 5000);
  });
  