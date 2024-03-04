import Informations from "../../pages/Informations/Informations"
import Inscription from "../../pages/Inscription/Inscription"
import "./PresentationPokedex.css"

function PresentationPokedex(){

    return(
        <>
            <h1>POKEDEX</h1>
            <p>
                Découvrez le monde fascinant des Pokémon avec notre Pokédex ultime! Que vous
                soyez un Maître Pokémon en devenir ou simplement curieux de découvrir chaque
                créature unique, notre base de données complète est votre porte d'entrée vers
                une aventure extraordinaire. Explorez les caractéristiques, les forces, et les
                faiblesses de chaque Pokémon, plongez dans leur univers, et devenez l'expert
                ultime.
            </p>
            <div>
                <Informations/>
                <Inscription/>
            </div>       
        </>
    )
}

export default PresentationPokedex