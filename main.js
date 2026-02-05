const display = document.getElementById("display");
console.log(display); // should NOT be null

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

alert("JS connected");
