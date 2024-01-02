
import React from 'react'
import pokeAvatar from './assets/pikachu-image.png'

function Card() {
    return(
    <>
    <div className="card-container">
        <img className="pokeImage" src={pokeAvatar} alt="Pokemon character image">
        </img>
        <div className="info-container">
            <p className ="card-info">Hello this is a test! Hello this is a test! Hello this is a test! Hello this is a test! Hello this is a test! Hello this is a test!Hello this is a test! Hello this is a test! Hello this is a test! Hello this is a test! Hello this is a test! Hello this is a test!</p>
        </div>
    </div>
    </>
    )
}

export default Card