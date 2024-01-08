
import React from 'react'
 /*import pokeAvatar from 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' */

// Pokemon profile card: includes container, image, and Pokemon info
function Card() {
    return(
    <> 
    <div className="card-container"> 
        <img className="pokeImage" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pokemon character image">
        </img>
        <div className="info-container">
            <h3 className="name">Pikachu</h3>
            {/* This is will differ from abilties, we are using type */}
            <p className="type-info">Electric</p>
        </div>
    </div> 
    </>
    )
}

export default Card