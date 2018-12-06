function makeGrid(r,c){
    const table = document.querySelector('#pixelCanvas');
}
function appe(){
    const table = document.querySelector('#pixelCanvas');
    let trow = document.createElement('tr');
    trow.setAttribute('id', 'table-row');
    let tcol = document.createElement('td');
    table.append(trow);
    document.querySelector('#table-row').append(tcol);

}

const submit = document.querySelector("#submit");
submit.addEventListener('click', function(event){
    const row = document.querySelector('#inputWidth').value;
    const column = document.querySelector('#inputHeight').value;
    makeGrid(row, column);
    event.preventDefault();
});