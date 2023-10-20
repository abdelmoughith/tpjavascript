function add(){
    if(!iEmpty()){
        var table = document.getElementById("table");

        var newRow = table.insertRow();
    
        var nameCell = newRow.insertCell(0);
        nameCell.innerHTML = document.getElementById('name').value;

        var emailCell = newRow.insertCell(1);
        emailCell.innerHTML = document.getElementById('email').value;

        var phoneCell = newRow.insertCell(2);
        phoneCell.innerHTML = document.getElementById('phone').value;

        var addressCell = newRow.insertCell(3);
        addressCell.innerHTML = document.getElementById('address').value;

        var buttons = '<input type="button" value="Edit" class="edit" onclick="editRow(this)"/><input type="button" value="Delete" class="delete" onclick="deleteRow(this)"/>';
        var ageCell = newRow.insertCell(4);
        ageCell.innerHTML = buttons;
        clearInputs();
    }else{
        alert('Make sure you filled all inputs');
    }
}
function iEmpty(){
    let s1 = document.getElementById('name').value;
    let s2 = document.getElementById('email').value;
    let s3 = document.getElementById('phone').value;
    let s4 = document.getElementById('address').value;
    if(s1 == "" || s2 == "" || s3 == "" || s4 == ""){
        return true;
    }
    return false;
}
function clearInputs(){
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('address').value = "";
}
function deleteRow(button) {
    //row.td.button
    var row = button.parentNode.parentNode;

    //table.row
    var table = row.parentNode;

    table.deleteRow(row.rowIndex);
}
function editRow(button) {

    // ROW
    var row = button.parentNode.parentNode;
    let name = ["Name", "Email", "Phone", "Address"];
    for(let i=0;i<4;i++){
        var currentText = row.cells[i].textContent;
        var newText = prompt(`Edit the ${name[i]}`, currentText);
        if (newText !== null) {
            row.cells[i].textContent = newText;
        }
    }
    
}