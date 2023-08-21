const hamburgerButton = document.getElementById("hamburger");

const hamburgerMenu = document.getElementById("menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("open");
  hamburgerMenu.classList.toggle("hidden");
});
