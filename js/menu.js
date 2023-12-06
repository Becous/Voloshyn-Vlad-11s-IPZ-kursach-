document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".mobile-menu-button");
  const header = document.querySelector(".header");

  menuButton.addEventListener("click", function () {
    header.classList.toggle("open");
  });
});
