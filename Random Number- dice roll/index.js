const button  = document.getElementById("mybutton");
const label1  =document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
let min =1;
let max = 6;


button.onclick = function(){
    label1.textContent = Math.floor(Math.random()*max)+min;
    label2.textContent = Math.floor(Math.random()*max)+min;
    label3.textContent = Math.floor(Math.random()*max)+min;
}