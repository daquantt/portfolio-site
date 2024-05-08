const toggleBtn = document.querySelector(".toggle-btn");

const inactiveBtns = document.getElementsByClassName("inactive");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector("#close");

toggleBtn.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show-nav");
});

[...inactiveBtns].forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
