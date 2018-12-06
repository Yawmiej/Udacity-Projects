// Select color input
// Select size input
const table = document.querySelector('#pixelCanvas');
const color = document.querySelector('#colorPicker');
const tableWidth = document.querySelector('#inputWidth');
const tableHeight = document.querySelector('#inputHeight');
console.log(color.value, tableHeight.value, tableWidth.value);
let td = document.getElementById('td');
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let rowHtml = '<tr><td id="td"></td></tr>';
    table.innerHTML = rowHtml;
    td.backgroundColor = color.value;
// Your code goes here!
    return false;
}

let submit = document.querySelector('#submit');
submit.addEventListener('click', makeGrid);


if(td){
    td.addEventListener('click', function(){
        td.backgroundColor = color.value;
    });
}
