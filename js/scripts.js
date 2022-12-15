const button = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

button.addEventListener("click", function () {
  button.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
