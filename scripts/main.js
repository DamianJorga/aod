const button = document.querySelector(".mobile-menu_button");
button.addEventListener("click", mobileMenu);

function mobileMenu() {
const mobileLinks = document.querySelector(".menu-mobile");
mobileLinks.classList.toggle("opened");
}


$(document).ready(() => {
    $('.slick') .slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
    });
  });