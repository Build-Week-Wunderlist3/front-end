const menuButton = document.getElementById("menu-button");
const x = document.getElementById("x");
const menuOverLay = document.getElementById("menu-overlay");

let click = 0;

function menuToggle() {
    if(click === 1) {
        menuOverLay.style.display = "none";
        menuButton.style.display = "flex";
        x.style.display = "none";
        click = 0;
    } else {
        menuOverLay.style.display = "flex";
        menuButton.style.display = "none";
        x.style.display = "flex";
        click = 1;
    }
}

menuButton.addEventListener("click", function() {
    menuToggle();
});

x.addEventListener("click", function() {
    menuToggle();
});