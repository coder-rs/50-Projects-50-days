const boxes = document.querySelectorAll(".box");

document.addEventListener("scroll", show);

show();

function show(){
  boxes.forEach(box => {
    let triggerPoint =  window.innerHeight * 0.8;
    let boxTop = box.getBoundingClientRect().top;
    if(boxTop < triggerPoint) {
      box.classList.add("show");
    }
    else{
      box.classList.remove("show");
    }
  });
}