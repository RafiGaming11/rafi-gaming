// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Close menu when a navigation link is clicked

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        document.querySelector(".nav-links").classList.remove("active");

    });
});


// Close menu when scrolling

window.addEventListener("scroll", () => {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.remove("active");

});


// Close menu when clicking outside the menu

document.addEventListener("click", (event) => {

    const navLinks = document.querySelector(".nav-links");
    const menuButton = document.querySelector(".menu-btn");

    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        navLinks.classList.remove("active");
    }

});


// Close menu when pressing Escape

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        document.querySelector(".nav-links").classList.remove("active");

    }

});
