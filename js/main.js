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


const navLinks = document.querySelectorAll('.menu li a');

console.log(navLinks)

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault()

    const targetId = this.getAttribute('href').substring(1); // Get the ID
    const targetElement = document.getElementById(targetId);
    // console.log(targetId)
    // console.log(targetElement)

    if (targetElement) {
      const targetPosition = targetElement.offsetTop; // Get the element's position
      const offset = 80; // Adjust for 80px offset
      window.scrollTo({
          top: targetPosition - offset
      });
    }
  })
});