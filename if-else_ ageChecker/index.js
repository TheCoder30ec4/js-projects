const input = document.getElementById("myText");
const submit = document.getElementById("submitBnt");
const label = document.getElementById("label");

let age ;

submit.onclick = function(){
    age = input.value ;
    age = Number(age);
    if(age>=100){
        label.textContent = `Your too old to vist this site`;
    }
    else if(age>=18){
        label.textContent = `Your good to go!!`;
    }
    else if(age === 1 || age === 0){
        label.textContent = `How can u even type ur just born`;
    }
    else{
        label.textContent = `Please enter a valid age`
    }
}