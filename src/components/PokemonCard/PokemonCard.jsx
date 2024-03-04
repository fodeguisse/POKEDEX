import generations from "../PokemonStarters/starters";
import "./PokemonCard.css"

function PokemonCard(){
   

    return(
        <>
            <div>
                <div key={generations}>{generations.map((oneGeneration) => 
                    <div key={oneGeneration}>
                        <h3 key={oneGeneration.generation}>{oneGeneration.generation}</h3>
                        <div key={oneGeneration.pokemons} className="card-container">
                            {oneGeneration.pokemons.map((onePokemon) =>
                            <div key={onePokemon.name} className="card">
                                <img key={onePokemon.image} src={onePokemon.image} />
                                <div className="container"><h4>{onePokemon.name}</h4></div>
                                <div>
                                    <ul>
                                        <li>HP : {onePokemon.stats.HP}</li>
                                        <li>attack : {onePokemon.stats.attack}</li>
                                        <li>defense : {onePokemon.stats.defense}</li>
                                        <li>special_attack : {onePokemon.stats.special_attack}</li>
                                        <li>special_defense : {onePokemon.stats.special_defense}</li>
                                        <li>speed : {onePokemon.stats.speed}</li>

                                    </ul>
                                </div>
                            </div>
                            
                            )}
                        </div>
                    </div>
                )}
            </div>

            </div>
            
        </>
    )
}

export default PokemonCard