
function createGrid(x = gridSize*gridSize){
    const container = document.querySelector('.container');
    const squares = document.querySelectorAll('.container div');
    for (let i = 0; i < squares.length; i++)
    {
    container.removeChild(squares[i]);
    }
    while(x!=0){
        container.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`);
        container.appendChild(document.createElement('div'));
        x--;
    }
    const newSquares = document.querySelectorAll('.container div');
    newSquares.forEach((div) => {
        div.addEventListener("mouseover", draw);
    });
    newSquares.forEach((div) => {
        div.setAttribute("style", "background-color:white;")
    });
}
let drawColor = "#000000";
function draw() //modify the grid square attributes
{
    this.setAttribute("style", `background-color:${drawColor};`)
}

let gridSize = 16;
const inputs = document.querySelectorAll('input');
function colorChange()
{
    drawColor = inputs[0].value;
}

function sizeChange()
{
    gridSize = inputs[1].value;
    document.querySelector('label').innerHTML = `Grid Size = ${gridSize}x${gridSize}`;
    createGrid(gridSize*gridSize);
}

createGrid();
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id == 'reset'){
        const squares = document.querySelectorAll('.container div');
          squares.forEach((div) => {
              div.setAttribute("style", "background-color:white;")
          });
          inputs[1].value = 16;
          inputs[0].value = "#000000";
          sizeChange();
          colorChange();
      }
    });
  });

