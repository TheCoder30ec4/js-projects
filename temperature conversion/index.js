const input = document.getElementById("temp");
const toCelsuis = document.getElementById("CtoF");
const toFahrenheit = document.getElementById("FtoC");
const result = document.getElementById("result");
let temperature;

function convert(){
    if(CtoF.checked){
        temperature = Number(input.value);
        temperature = temperature*5/9 -32;
        result.textContent = `Temperature in Celsuis = ${temperature}`;
    }
    else if(FontFace.checked){
        temperature = Number(input.value);
        temperature = temperature*9/5 +32;
        result.textContent = `Temperature in Fahrenheit = ${temperature}`;
    }
    else{
        result.textContent = `Please select a unit to convert it into`;
    }
}