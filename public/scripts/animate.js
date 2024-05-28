
// Usage:
// 1. Add scroll-animate class to animatable HTML elements.
// 2. Once visible in viewport, this JS will add the 'in-view' class to those elements.
// 3. Define your CSS to enable animations once that element is in view, for example: div.in-view { }

// Checks If the document is loaded before the script is placed in the <head>
document.addEventListener("DOMContentLoaded", () => {
  // Create a new IntersectionObserver instance
  const observer = new IntersectionObserver((entries) => {
    // Loop through each entry (element being observed)
    entries.forEach((entry) => {
      // Toggle the 'in-view' class based on the visibility of the element
      entry.target.classList.toggle("in-view", entry.isIntersecting);
    });
  });

  // Get all elements with the 'fade-on-scroll' class
  const fadeElements = document.querySelectorAll(".fade-on-scroll");

  // Observe each 'fade-on-scroll' element using the IntersectionObserver
  fadeElements.forEach((element) => observer.observe(element));
});

// Dropdown Menu
window.addEventListener("DOMContentLoaded", () => {
  // Get the menu button and dropdown container elements
  const menuBtn = document.getElementById("menu-btn");
  const dropdownCont = document.getElementById("dropdown-cont");

  // Check if both elements exist
  if (menuBtn && dropdownCont) {
    // Set the initial opacity of the dropdown container to 0 (hidden)
    dropdownCont.style.opacity = 0;

    // Add a click event listener to the menu button
    menuBtn.addEventListener("click", () => {
      // Set the opacity of the menu button and dropdown container to 1 (visible)
      menuBtn.style.opacity = 1;
      dropdownCont.style.opacity = 1;
    });
  } else {
    // Log an error message if either element is not found
    console.log("Error: menu-btn or dropdown-cont not found");
  }
});
