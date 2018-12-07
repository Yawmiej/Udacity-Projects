const table = document.querySelector('#pixelCanvas');

function makeGrid(r = 1,c = 1){
    let oldRow = document.querySelectorAll('tr');
    for (let n = 0; n < oldRow.length; n++ ) {
        oldRow[n].remove();
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

const submit = document.querySelector("#submit");
submit.addEventListener('click', function(event){
    let row = document.querySelector('#inputWidth').value;
    let column = document.querySelector('#inputHeight').value;
    makeGrid(row, column);
    row = 1;
    column = 1;
    event.preventDefault();
});


table.addEventListener('click', function(event){
    let cell = document.querySelectorAll('td');
    let color = document.querySelector('#colorPicker').value;
    for (let i = 0; i < cell.length; i++ ) {
        if(event.target == cell[i]) {
            if (cell[i].hasAttribute('style') ){
                cell[i].removeAttribute('style');
            } else{
            cell[i].style.backgroundColor = color;
            }
        }
    }
    
});