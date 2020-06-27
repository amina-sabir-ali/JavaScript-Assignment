// function to get user input
var result = document.getElementById("input");
function getNumber(num){
    result.value += num;
}

function clearScreen(){
   result.value = "";
}

function getResult(){
    result.value = eval(result.value);
}

function backspace(){
        var num = result.value;
        var num = num.substr(0,num.length-1);
        result.value = num;
}