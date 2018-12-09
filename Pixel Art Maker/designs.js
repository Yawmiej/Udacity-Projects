// Creates the Grid of tables in rows and columns
// deletes any existing grid
const table = document.querySelector('#pixelCanvas');
let makeGrid = (r = 1,c = 1) => {
    let oldRows = document.querySelectorAll('tr');
    for (let oldRow of oldRows) {
        oldRow.remove();
    }
    for (let i = 1; i <= r; i++) {
        
        let trow = document.createElement('tr');
        trow.setAttribute('id', `table-row${i}`);
        table.append(trow);
        for (let j = 1; j <= c; j++) {
            let tcol = document.createElement('td');
            document.querySelector(`#table-row${i}`).append(tcol);
        }
    }
}

// Submit event addEventListener, calls the makeGrid function 
// on clicking the submit button
const submit = document.querySelector("#submit");
submit.addEventListener('click', (event) => {
    let row = document.querySelector('#inputWidth').value;
    let column = document.querySelector('#inputHeight').value;
    makeGrid(row, column);
    event.preventDefault();
});

// Color changer event Listener, adds selected color to the grid when clicked
table.addEventListener('click', (event) => {
    let cells = document.querySelectorAll('td');
    let color = document.querySelector('#colorPicker').value;
    for (let cell of cells ) {
        if(event.target == cell) {
            if (cell.hasAttribute('style') ){
                cell.removeAttribute('style');
            } else{
            cell.style.backgroundColor = color;
            }
        }
    }
    
});