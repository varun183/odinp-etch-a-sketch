const gridSide = 600;

let rows = 20;
let cols = 20;


const sketchArea = document.querySelector('.board');
sketchArea.style.width = `${gridSide}px`;
sketchArea.style.height = `${gridSide}px`; 


function createGridCells(){
    for(let i =0;i<(rows*cols);i++){

        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSide/cols)-2.22}px`;
        gridCell.style.height= `${(gridSide/rows)-2.22}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);


    }

}

createGridCells();