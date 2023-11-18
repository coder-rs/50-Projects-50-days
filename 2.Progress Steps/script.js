const progress = document.getElementById("progress");
const prev = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currActive = 1;

next.addEventListener("click", () => {
    currActive++;
    if(currActive > circles.length){
        currActive = circles.length;
    }
    updateProgressBar();
});

prev.addEventListener("click", () => {
    currActive--;
    if(currActive < 1){
        currActive = 1;
    }
    updateProgressBar();
});

function updateProgressBar() {
    circles.forEach((circle, idx) => {
        if(currActive > idx){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    });

    let allActives = document.querySelectorAll(".active").length;

    progress.style.width = (allActives - 1) / (circles.length - 1) * 100 + "%";

    if(currActive == circles.length){
        next.disabled = true;
    }
    else if (currActive == 1) {
        prev.disabled = true;
    }
    else{
        next.disabled = false;
        prev.disabled = false;
    }
}