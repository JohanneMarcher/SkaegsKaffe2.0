//Hamburger menu, brugte denne tutorial: https://www.youtube.com/watch?v=ydZc17rlR5E
//Vi ændrede på CSS så det fulgte Mobile first principperne
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});