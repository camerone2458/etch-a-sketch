//Create constants to simplify code for future use
const container = document.querySelector('#board');
let squares = document.querySelectorAll('.gridSquare');

function createGrid(numberOfItems) {
  for (let i = 0; i < numberOfItems; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let x = 0; x < numberOfItems; x++) {
      let cell= document.createElement('div');
      cell.className = 'gridSquare';
      row.appendChild(cell);
    };
    container.appendChild(row);
  };

  colorSquares(false);

};

function clearBoard() {

  let squares = document.querySelectorAll('.gridSquare');
  squares.forEach((square) => {
    square.style.background = 'white';
  });
};

function newSize() {
  container.innerHTML = '';
  let input = prompt('Please enter a number less than 100');
  let running = true;

  while(running) {

    if(isNaN(input)) {
      input = prompt('Please enter a number');
    } else if (input > 100) {
      input= prompt('Please enter a number less than 100');
    } else if (input < 1) {
      input = prompt('Please enter a number greater than 1');
    } else {
      running = false;
    };
  };

  for (let i = 0; i < input; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let x = 0; x < input; x++) {
      let cell= document.createElement('div');
      cell.className = 'gridSquare';
      row.appendChild(cell);
    };
    container.appendChild(row);
  };

  colorSquares(false);

};

createGrid(16);

function colorSquares(notColored) {

  squares = document.querySelectorAll('.gridSquare');

  if (notColored == false) {
    squares.forEach((square) => {
      square.addEventListener('mouseover', function(e) {
        e.target.style.background = 'black';
      });
    });
  } else {
    squares.forEach((square) => {
      square.addEventListener('mouseover', function(e) {
        let r1 = Math.floor(Math.random() * 256);
        let r2 = Math.floor(Math.random() * 256);
        let r3 = Math.floor(Math.random() * 256);
        e.target.style.background = 'rgb(' + r1 + ' ' + r2 + ' ' + r3 + ')';
      });
    });
  };
};
