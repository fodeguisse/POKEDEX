import generations from "./starters";



function PokemonStarters(){
  
    return(
        <>
            <h2>Starters Pokémon</h2>
            <div key={generations}>{generations.map((oneGeneration) => 
                <div key={oneGeneration}>
                    <h3 key={oneGeneration.generation}>{oneGeneration.generation}</h3>
                    <div key={oneGeneration.pokemons}>
                        {oneGeneration.pokemons.map((onePokemon) =>
                        <div key={onePokemon.name} > 
                            <p>{onePokemon.name}</p>
                            <img key={onePokemon.image} src={onePokemon.image}/>
                        </div>
                        
                        )}
                    </div>
                </div>
                
                
                )}
            </div>

        </>
    )
}

export default PokemonStarters