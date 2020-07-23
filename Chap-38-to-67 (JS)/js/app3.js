// -------------- Chap-43 to Chap-48 --------------
// **** TASK 3 ****
function delete_row(r){
var i = r.parentNode.parentNode.rowIndex;
document.getElementById("std_table").deleteRow(i);   
}
// **** TASK 4 ****
function changeImage(id,src){
var image = document.getElementById(id);
image.src = src;
}
// **** TASK 5 ****
function decrease_counter(){
var counter_val = document.getElementById('counterValue'); 
counter_val.value = parseInt(counter_val.value) - 1;
}
function increase_counter(){
var counter_val = document.getElementById('counterValue'); 
counter_val.value = parseInt(counter_val.value) + 1;
}

