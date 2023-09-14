
/* Create grid with rows that contain cells */
const grid = document.createElement("div");
grid.classList.add("king_grid");
for(let i = 0;i < 16;i++) {
    const row = document.createElement("div");
    row.classList.add("gridrow");
    for(let j = 0;j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("gridcell");
        cell.textContent = j;
        row.appendChild(cell);
    };
    grid.appendChild(row);
};

const gridcontainer = document.querySelector(".gridcontainer");
gridcontainer.appendChild(grid);












/* Function to call when user input is given after button push*/
function NewGridDetails (numberofcells) {
    




};


/*Function to call when button is pushed*/
function NewGridButton() {



};


/*Event listeners and item selectors*/
const thegridcells = document.querySelector(".gridcell");