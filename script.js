// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Close menu when a navigation link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        document.querySelector(".nav-links")
            .classList.remove("active");

    });

});


// ===============================
// FAVORITES / WISHLIST
// ===============================

function toggleFavorite(button) {

    const card = button.closest(".game-card");

    const gameName =
        card.querySelector("h3").textContent.trim();


    let favorites =
        JSON.parse(localStorage.getItem("rafiFavorites")) || [];


    if (favorites.includes(gameName)) {

        // Remove from favorites

        favorites =
            favorites.filter(game => game !== gameName);

        button.textContent = "♡";
        button.classList.remove("favorite-active");

    } else {

        // Add to favorites

        favorites.push(gameName);

        button.textContent = "♥";
        button.classList.add("favorite-active");

    }


    localStorage.setItem(
        "rafiFavorites",
        JSON.stringify(favorites)
    );
}


// ===============================
// LOAD SAVED FAVORITES
// ===============================

function loadFavorites() {

    const favorites =
        JSON.parse(localStorage.getItem("rafiFavorites")) || [];


    document.querySelectorAll(".game-card").forEach(card => {

        const gameName =
            card.querySelector("h3").textContent.trim();

        const button =
            card.querySelector(".favorite-btn");


        if (!button) return;


        if (favorites.includes(gameName)) {

            button.textContent = "♥";
            button.classList.add("favorite-active");

        } else {

            button.textContent = "♡";
            button.classList.remove("favorite-active");

        }

    });

}


// Run when page loads

document.addEventListener("DOMContentLoaded", loadFavorites);
