var colors = [];
var text = prompt("type text");
for (var i = 0; i < 5; i++) {
  var color = prompt("type color");
  colors.push(color);
}
var interval;
document.body.innerHTML = `<h3 class="myH3">${text}</h3>`;
function changeColor() {
  var rndNum = Math.floor(Math.random() * 5);
  document.getElementsByClassName("myH3")[0].style.color = colors[rndNum];
}

document.body.innerHTML += `<button id="btn">click here to change color</button>`;
document.body.innerHTML += `<button id="btnStop">click here to stop changing</button>`;

document
  .getElementsByClassName("myH3")[0]
  .addEventListener("click", (interval = setInterval(changeColor, 3000)));

document.getElementById("btnStop").addEventListener("click", function () {
  clearInterval(interval);
});
