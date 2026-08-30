function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Close menu when Home, Games or About is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        document.querySelector(".nav-links")
            .classList.remove("active");

    });

});
