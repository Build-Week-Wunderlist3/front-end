const menuButton = document.getElementById("menu-button");
const x = document.getElementById("x");
const nav = document.getElementById("nav");
let click = 0;
function menuToggle() {
    if (click === 0) {
        nav.style.display = "none";
        menuButton.style.display = "flex";
        x.style.display = "none";
        click = 1;
    } else {
        nav.style.display = "flex";
        menuButton.style.display = "none";
        x.style.display = "flex";
    }
        click = 0;
}
menuButton.addEventListener("click", function () {
    menuToggle();
});
x.addEventListener("click", function () {
    menuToggle();
});