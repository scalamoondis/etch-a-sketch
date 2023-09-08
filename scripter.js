const grid = document.createElement("div");
grid.classList.add("king_grid");
for(let i = 0;i < 16;i++) {
    const row = document.createElement("div");
    row.textContent = "row"+i;
    row.classList.add("gridrow"+i);
    for(let j = 0;j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("gridcell"+j);
        cell.textContent = j;
        row.appendChild(cell);
    };
    grid.appendChild(row);
};

document.body.appendChild(grid);