const mybox = document.getElementById("mybox");
const moveAmout = 10;

let x= 0;
let y=0;

document.addEventListener("keydown", evenet=>{
    mybox.textContent = "😘";
    mybox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event=>{
    mybox.textContent = "😁"
    mybox.style.backgroundColor = "lightgreen";
})

document.addEventListener("keydown", event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();

        switch(event.key){

            case "ArrowUp":
                y -= moveAmout;
                break;
            case "ArrowDown":
                y += moveAmout;
                break;
            case "ArrowLeft":
                x -= moveAmout;
                break;
            case "ArrowRight":
                x += moveAmout;
                break;
        }
    }

    mybox.style.top = `${y}px`;
    mybox.style.left = `${x}px`;
})