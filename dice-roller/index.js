
function rollDice(){
    const input = document.getElementById("no_of_dice").value;
    const num_result = document.getElementById("dicesResult");
    const img_result = document.getElementById("diceImages");
    const values = [];
    const img = [];

    for(let i=0;i< input;i++){
        const value  = Math.floor(Math.random()*6)+1;
        values.push(value);
        img.push(`<img src="img/${value}.png" alt="dice:${value}">`);
    }
    num_result.textContent = `Number: ${values.join(', ')}`;
    img_result.innerHTML = img.join('');
    console.log(img_result)
    
}