
const container = document.querySelector(".container");
const txt = document.querySelector(".text");

//scale one number range to another
function scale(num, in_min, in_max, out_min, out_max){
  return ( ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
}

let load = 0;
let interval = setInterval(blur, 50);

function blur(){
  ++load;
  if(load > 99) {
    clearInterval(interval);
  }
  txt.innerHTML = `${load}%`;
  txt.style.opacity = scale(load, 0, 100, 1, 0);
  container.setAttribute("style", `filter: blur(${scale(load, 0, 100, 30, 0)}px)`);
}

