
function createGrid(x = 256){
    const container = document.querySelector('.container');
    while(x!=0){
        container.appendChild(document.createElement('div'));
        x--;
    }
}
let drawColor = "#000000";
function draw() //modify the grid square attributes
{
    this.setAttribute("style", `background-color:${drawColor};`)
}
const inputs = document.querySelector('input');
function colorChange()
{
    drawColor = inputs.value;
}

createGrid();

const squares = document.querySelectorAll('.container div');
console.log(squares);
squares.forEach((div) => {
    div.addEventListener("touchmove", draw, false);
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id == 'reset'){
          squares.forEach((div) => {
              div.setAttribute("style", "background-color:white;")
          });
      }
    });
  });

