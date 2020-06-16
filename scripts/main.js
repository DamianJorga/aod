const button = document.querySelector(".mobile-menu_button");
button.addEventListener("click", mobileMenu);

function mobileMenu() {
const mobileLinks = document.querySelector(".menu-mobile");
mobileLinks.classList.toggle("opened");
}
