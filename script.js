console.log("hello world!");

let width = 4;
let height = 4;

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