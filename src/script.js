const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    console.log(e.target.classList);

    if (e.target.classList.contains("add")) {
        count.innerHTML++;
    }
    if (e.target.classList.contains("subtract")) {
        count.innerHTML--;
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
    }

    setColor();
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "greenyellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "#fe9f7d";
    } else {
        count.style.color = "#fff";
    }
}