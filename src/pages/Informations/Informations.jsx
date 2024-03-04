
function Informations(){
    return(
        <>
             <section>
                <div className="recherche">
                    <label htmlFor="name"> Nom</label>
                    <input type="text" id="name" name="name"/>
                    <input type="submit" value="Recherche"/>
                </div>

                <div className="fichesDetaillees">
                    <h2>Fiches Détaillées:</h2>
                    <p>Chaque Pokémon est unique, et notre Pokedex célèbre cette diversité.</p>
                
                </div>

                <div className="plusaDecouvrir">
                    <h2>Toujours Plus à Découvrir: </h2>
                    <p>
                        Nous nous engageons à enrichir constamment le Pokedex avec de nouvelles fonctionnalités passionnantes. Restez à l'affût!
                    </p>
                </div>

            </section>
        </>
    )
}

export default Informations