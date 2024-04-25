
async function fetchData(){

    try{
        const name = document.getElementById("Name").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!response.ok){
            throw new Error("Could not find the particular Pokemon");
        }
        const data = await response.json();
        const PokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        console.log(PokemonSprite)
        imgElement.src = PokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    };
}