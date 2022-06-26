console.log("hello world!");

//default values
let gridSize = 4;

//button to enter custom dimensions
const dimensionbutton = document.querySelector('.dimensionbutton');
dimensionbutton.addEventListener('click', () => {
    gridSize = prompt('Enter grid size');
    if (0 < gridSize && gridSize <= 100){
        paintGrid();
    }
    else {
        alert("value must be a number between 1 and 100");
    }
});

function paintGrid(){
    // clear any preexisting grids
    document.getElementById('container').innerHTML = '';

    // create rows container
    const rows = document.createElement('div');
    rows.id = "rows";
    document.querySelector('#container').appendChild(rows);

    // For each height
    for(y = 1; y <= gridSize; y++){
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = "row" + y;
        document.querySelector('#rows').appendChild(row);

        // Create a row of divs
        for(x = 1; x <= gridSize; x++){
            const div = document.createElement('div');
            div.classList.add('square')
            document.querySelector('#row' + y).appendChild(div);
        }  
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            console.log("hover is working");
            square.style.backgroundColor = "#333";
        });
    });
}

