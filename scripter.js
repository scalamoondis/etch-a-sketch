
let currentSize = 16;
let currentStatus = "write";

/* Create grid with rows that contain cells, which have basic mouseover event listener */
function startingGrid(currentSize, container) {
    
    for(let i = 0;i < currentSize;i++) {
        const row = document.createElement("div");
        row.classList.add("gridrow");
        for(let j = 0;j < currentSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("gridcell");
            cell.addEventListener("mouseover", changeColor);
            row.appendChild(cell);
        };
        container.appendChild(row);
    };

};


/*Event listeners and item selectors*/
const eraserbutton = document.querySelector(".eraserbutton");
const clearbutton = document.querySelector(".clearbutton");
const newgridbutton = document.querySelector(".newgridbutton");
const gridcontainer = document.querySelector(".gridcontainer");


eraserbutton.addEventListener("click", changeStatus);
clearbutton.addEventListener("click", clearGrid);
newgridbutton.addEventListener("click", NewGridDetails);



/* Function to call when user input is given after button push*/
function NewGridDetails () {
    let newSize = prompt("What size are we talking? The max is 55x55 though.", 16);
    if(newSize > 55) {
        let newSizeTwo = prompt("Listen, I didn't efficiently develop the grid container... Sorry about that. The max is still 55.", 16);
        if(newSizeTwo > 55) {
            alert("You're getting the regular.");
            currentSize = 16;
            clearGrid();
        }else{
            currentSize = newSizeTwo;
            clearGrid();
        };
    }else {
        currentSize = newSize;
        clearGrid();
    };
    
};



/* Clears the grid, and replaces with blank */
function clearGrid() {
    gridcontainer.innerHTML = "";
    startingGrid(currentSize, gridcontainer);
    


};

/*Writing, color changing event function for cells */
function changeColor(e) {
    if(currentStatus == "write") {
        e.target.style.backgroundColor = "black";
    }else if(currentStatus == "erase") {
        e.target.style.backgroundColor = "white";
    };

};

/*Status changing event for the color changing event lol */
function changeStatus() {
    if(currentStatus == "write") {
        currentStatus = "erase";
        eraserbutton.style.backgroundColor = "darkgrey";
    }else if(currentStatus == "erase") {
        currentStatus = "write";
        eraserbutton.style.backgroundColor = "buttonface";
    };

};

window.onload = startingGrid(currentSize, gridcontainer);