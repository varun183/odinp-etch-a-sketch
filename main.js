const gridSide = 600;
let squareSide = 16;
let color = 'black';


let sizeSelectorBtn = document.querySelector('#sizeSelector');
sizeSelectorBtn.addEventListener('click', function(){
    let squareSide = getsquareSide();
    removeGridCells();
    createGridCells(squareSide);
})








const sketchArea = document.querySelector('.board');
sketchArea.style.width = sketchArea.style.height = `${gridSide}px`; 


 
function createGridCells(squareSide){

    const numOfSquares = (squareSide*squareSide);
    const widthAndHeight =  `${(gridSide/squareSide)}px`;
    for(let i =0;i<(numOfSquares);i++){

        const gridCell = document.createElement("div");

        gridCell.style.width =  gridCell.style.height= widthAndHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover",setCellColor);


    }

}



function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
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



function randomColor(){
    let red = Math.trunc((Math.random()*255+1));
    let blue = Math.trunc((Math.random()*255+1));
    let green = Math.trunc((Math.random()*255+1));

    let color = `rgb(${red},${blue},${green})`
    return color;


}

const randomColorbtn = document.querySelector('#randomColor');
randomColorbtn.addEventListener("click",()=>{
    color= "random";
})


function setCellColor(){

   

    const colorPicker = document.querySelector("#color-picker");
    
    colorPicker.addEventListener("change",()=>{
        color = colorPicker.value;
        
    })

    

    

   if(color=="random"){
        this.style.backgroundColor = randomColor();
    }else{
        this.style.backgroundColor = color;

    }
   
    
    }


    const resetColor = document.querySelector("#resetColor");

    resetColor.addEventListener("click",()=>{
        const girdCells = document.querySelectorAll(".cell");

        girdCells.forEach(cell=>cell.style.backgroundColor = "white");
    })




