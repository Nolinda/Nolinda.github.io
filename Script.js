document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-links");

    hamburgerIcon.addEventListener("click", function () {
        menu.classList.toggle("open"); // Toggle the visibility of the menu
    });
});

// Attach event listener to hamburger icon for toggling the menu
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hamburger-icon").addEventListener("click", function () {
        menu.classList.toggle("open"); // Toggle the visibility of the menu
    });
});