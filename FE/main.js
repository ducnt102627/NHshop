const menu = document.querySelector(".main-menu");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("main-menu__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    menu.classList.toggle("main-menu__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});
