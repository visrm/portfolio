// Usage:
// 1. Add scroll-animate class to animatable HTML elements.
// 2. Once visible in viewport, this JS will add the 'in-view' class to those elements.
// 3. Define your CSS to enable animations once that element is in view, for example: div.in-view { }

// Checks If the document is loaded before the script is placed in the <head>
document.addEventListener("DOMContentLoaded", () => {

    // Register IntersectionObserver
    const Intersection_observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add 'in-view' class if observation target is inside viewport
                entry.target.classList.add("in-view");
            } else {
                // Remove 'in-view' class otherwise
                entry.target.classList.remove("in-view");
            }
        });
    });

    // Declares what to observe, and observes its properties.
    const allAnimateElements = document.querySelectorAll(".scroll-animate");

    // Adds observer to each of those elemnts.
    allAnimateElements.forEach((element) => {
        Intersection_observer.observe(element)
    });

});

window.addEventListener("DOMContentLoaded", () => {
    const x = document.getElementById("menu-btn");
    document.getElementById("dropdown-cont").style.opacity = 0;
    if (x) {
        const listener = x.addEventListener('click', function () {
            document.getElementById("menu-btn").style.opacity = 1;
            document.getElementById("dropdown-cont").style.opacity = 1;

        });
    }
    else console.log("error");
});



