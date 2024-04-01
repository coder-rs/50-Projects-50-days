const button = document.querySelector(".btn");
const search = document.querySelector(".search-container");

button.addEventListener("click", () => {
  search.classList.toggle("active");
});