var table = document.getElementById("myTable");
var cellRow = 2;
var cellColumn =2;
document.onkeydown = checkKey;
function checkKey(e) {
    if (e.keyCode == '38') {
        // up arrow
        if(cellRow<table.rows.length-1){
            var aux = table.rows[cellRow].cells[cellColumn].innerHTML;
            table.rows[cellRow].cells[cellColumn].innerHTML = table.rows[cellRow+1].cells[cellColumn].innerHTML;
            table.rows[cellRow+1].cells[cellColumn].innerHTML = aux;
            cellRow = cellRow +1;
        }
    }
    else if (e.keyCode == '40') {
        // down arrow

        if(cellRow>0){
            var aux = table.rows[cellRow].cells[cellColumn].innerHTML;
            table.rows[cellRow].cells[cellColumn].innerHTML = table.rows[cellRow-1].cells[cellColumn].innerHTML;
            table.rows[cellRow-1].cells[cellColumn].innerHTML = aux;
            cellRow = cellRow -1;
        }
    }
    else if (e.keyCode == '37') {
        // left arrow
        if(cellColumn<table.rows[0].cells.length-1){
            var aux = table.rows[cellRow].cells[cellColumn].innerHTML;
            table.rows[cellRow].cells[cellColumn].innerHTML = table.rows[cellRow].cells[cellColumn+1].innerHTML;
            table.rows[cellRow].cells[cellColumn+1].innerHTML = aux;
            cellColumn = cellColumn +1;
        }
    }
    else if (e.keyCode == '39') {
        // right arrow

        if(cellColumn>0){
            var aux = table.rows[cellRow].cells[cellColumn].innerHTML;
            table.rows[cellRow].cells[cellColumn].innerHTML = table.rows[cellRow].cells[cellColumn-1].innerHTML;
            table.rows[cellRow].cells[cellColumn-1].innerHTML = aux;
            cellColumn = cellColumn -1;
        }
    }

}