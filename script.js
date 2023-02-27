let currentColor = "#000";
let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let inputColor = document.getElementById("color");
inputColor.addEventListener("change", chancecolor);
document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

document.querySelector(".clear").addEventListener("click", clearScreen);

document.querySelector("#erase").addEventListener("click", eraseColor);

function chancecolor(e) {
  currentColor = e.target.value;
}

function eraseColor() {
  currentColor = "#FFF";
}

function colorClickEvent(e) {
  let color = currentColor.value;
  currentColor = color;

  document.querySelector(".color.active").classList.remove("active");
  e.target.classList.add("active");
}

function mouseDownEvent(e) {
  canDraw = true;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJon = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function clearScreen() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
