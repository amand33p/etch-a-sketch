const container = document.querySelector('#container');
let pixels = document.getElementsByClassName('pixels');
let clearButton = document.getElementById('clear');
let gridButton = document.getElementById('gridSize');
let colorButton = document.getElementById('color');
let randomButton = document.getElementById('random');

createGrid(16);
blackColor();

clearButton.addEventListener('click', function() {
    removeGrid();
    createGrid(16);
    blackColor();

});

gridButton.addEventListener('click', function() {
    removeGrid();
    size = prompt('How many pixels? (enter upto 64)');
    while (size > 64) {
      size = prompt('Must not be more than 64. How many pixels?')
    }
    createGrid(size);
    blackColor();
});

colorButton.addEventListener('click', function() {
    color = prompt('What color do you want?');
    oneColor();
});

randomButton.addEventListener('click', function() {
    randomColor();
});

function removeGrid() {
  Array.from(pixels).forEach(pixel => pixel.remove());
}

function createGrid(size) {
    container.style.border = "3px solid black";
    container.style.width = "600px";
    container.style.height = "600px";
    container.style.display = "grid";
    container.style.margin = "auto";
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixels';
      container.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
  }
}



function blackColor() {
Array.from(pixels).forEach(pixel => pixel.addEventListener('mouseover', function() {
  pixel.style.backgroundColor = 'black';
}));
}

function oneColor() {
Array.from(pixels).forEach(pixel => pixel.addEventListener('mouseover', function() {
  pixel.style.backgroundColor = color;
}));
}

function randomColor() {
Array.from(pixels).forEach(pixel => pixel.addEventListener('mouseover', function() {
  let color1 = Math.floor(Math.random() * 200);
  let color2 = Math.floor(Math.random() * 200);
  let color3 = Math.floor(Math.random() * 200);
  pixel.style.backgroundColor = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')'
}));
}
