let numOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selcted');
      this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click', function () {
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?'
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'NEW COLORS';
  messageDisplay.textContent = '';

  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }

  }
  h1.style.backgroundColor = 'steelblue';

}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  let arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor())

  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a 'red' from 0-255
  let r = Math.floor(Math.random() * 256);
  //pick a 'green' from 0-255
  let g = Math.floor(Math.random() * 256);
  //pick a 'blue' from 0-255
  let b = Math.floor(Math.random() * 256);
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}