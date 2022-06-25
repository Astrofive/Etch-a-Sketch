console.log("hello world!");

//default values
let width = 4;
let height = 4;

//button to enter custom dimensions
const dimensionbutton = document.querySelector('.dimensionbutton');
dimensionbutton.addEventListener('click', () => {
    width = prompt('Enter width');
    height = prompt('Enter height');
    paintGrid();
});

function paintGrid(){
    //clear any preexisting grids
    document.getElementById('grids').innerHTML = '';

    // For each height
    for(y = 1; y <= height; y++){
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = "row" + y;
        document.querySelector('#grids').appendChild(row);

        // Create a row of divs
        for(x = 1; x <= width; x++){
            const div = document.createElement('div');
            div.classList.add('grid')
            document.querySelector('#row' + y).appendChild(div);
        }  
    }

    const squares = document.querySelectorAll('.grid');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            console.log("hover is working");
            square.style.backgroundColor = "#333";
        });
    });
}

