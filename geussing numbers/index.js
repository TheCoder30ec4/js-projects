const minNum = 1;
const maxNum =10;

const ans = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
let attempts =0;
let guess;
let running = true;


while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Please a enter a valid number`);
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("Please enter the number in the given range");
    }
    else{
        attempts ++;
        if(guess < ans){
            window.alert(`Too low! Try again `);
        }
        else if(guess> ans){
            window.alert("Too High! Try again");
        }
        else{
            window.alert(`Right guess ${guess}!, you took ${attempts} attempts!!!`);
            running = false;
        }
    }

    
}