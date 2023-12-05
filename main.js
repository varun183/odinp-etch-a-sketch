const gridSide = 600;
let squareSide = 16;


const sizeSelectorBtn = document.querySelector('#sizeSelector');
sizeSelectorBtn.addEventListener('click', function(){
    let squareSide = getsquareSide();
    createGridCells(squareSide);
})


const sketchArea = document.querySelector('.board');
sketchArea.style.width = sketchArea.style.height = `${gridSide}px`; 

function setCellColor(){
    this.style.backgroundColor = "black";
}

 
function createGridCells(squareSide){

    const numOfSquares = (squareSide*squareSide);
    const widthOrHeight =  `${(gridSide/squareSide)-2.22}px`;
    for(let i =0;i<(numOfSquares);i++){

        const gridCell = document.createElement("div");

        gridCell.style.width =  gridCell.style.height= widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover",setCellColor);


    }

}

function getsquareSide(){
    let input = prompt("Enter the size of the sketch-area");

    let message = document.querySelector("#message");

    if(input==""){
        message.textContent ="Error!! Provide a number";
    }else if(input<4 || input>100){
        message.textContent = "Invalid input!! Provide a number between 4 and 100"
    }else{
        message.textContent="Canvas is ready!!!";
        return input;
    }
}

