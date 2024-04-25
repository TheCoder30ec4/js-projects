const decrease = document.getElementById("decreaseBnt");
const increase = document.getElementById("increaseBnt");
const reset =  document.getElementById("resetBnt");
const label = document.getElementById("countLabel");

let count =0;

increase.onclick = function(){
    count ++;
    label.textContent = count;
}

decrease.onclick = function(){
    count--;
    label.textContent = count;
}
reset.onclick = function(){
    count =0;
    label.textContent = count;
}