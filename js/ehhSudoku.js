function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
function shiftToArrayEnd(array, from, to, loops){
    for(let i = 0; i < loops; i++) {
        // Delete the item from it's current position
        let item = array.splice(from, 1);

        // Move the item to its new position
        array.splice(to, 1, item[0]);
    }

}
function buildSudokuRow(sudokuSize){
    for(let i = 1; i <= sudokuSize; i++) {
        sudokuRow.push(i);
    }
    shuffle(sudokuRow);
}
function createTable(tableData) {
    var table = document.getElementById("sudokuTable");

    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.className = "cell"+Math.floor((Math.random() * 3) + 1);
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
}

var sudokuRow = [];
var sudokuGrid = [];

buildSudokuRow(4);

for(let i = 0; i < sudokuRow.length; i++) {
    let shiftPatternArray = [2,2,1,2];
    shiftToArrayEnd(sudokuRow,0,3,shiftPatternArray[i]);
    sudokuGrid.push([sudokuRow.slice(0)]);
}

for(let i = 0; i < sudokuGrid.length; i++) {
    createTable(shuffle(sudokuGrid[i]));
}