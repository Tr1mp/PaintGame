const container = document.querySelector(".container"),
      squareQuantity = 800;

for (let i = 0; i < squareQuantity; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.draggable = true;
    // square.attributes.add("draggble");

    square.addEventListener("mouseover", () => mouseHover(square));
    square.addEventListener("mouseleave", () => mouseLeave(square));
    document.addEventListener("mousedown", changeColor);
    document.addEventListener("mouseup", changeColor);
    document.addEventListener("dblclick", clearColors);
    square.ondragstart = () => false;
    container.append(square);
}

let flag = true;
let color = ''
function mouseHover(element) {
    color = `rgba(${getRandomColor(0, 255)}, 
                    ${getRandomColor(0, 255)}, 
                    ${getRandomColor(0, 255)}, 
                    ${getRandomColor(40, 100)/100})`
    element.classList.add("colored");
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function clearColors() {
    flag = true;
    const colored = document.querySelectorAll(".colored");
    colored.forEach(square => mouseLeave(square));
}

function changeColor() {
    flag = !flag;
}

function mouseLeave(element) {
    if (flag) {
        element.classList.remove("colored");
        element.style = "";
    }
    
}

function getRandomColor(min, max) {
    return Math.round(Math.random() * (max - min) + min); 
}