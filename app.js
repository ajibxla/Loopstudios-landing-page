const nav = document.querySelector(".nav");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

nav.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
  },
  false
);
