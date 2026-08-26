function showMessage(game) {
    alert("You selected: " + game);
}

function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    }
}