
import React from 'react'
 /*import pokeAvatar from 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' */

// Pokemon profile card: includes container, image, and Pokemon info

function Card({ pokemon, loading }) { 
    console.log(pokemon)

    return(
    <> 
    {
        loading ? <h1>Loading...</h1> : 
        pokemon.map((item) => {
            return(
                <>
                    <div className="card-container"> 
                        <img className="pokeImage" src={item.sprites.front_default} alt="Pokemon character image">
                        </img>
                        <div className="info-container">
                            <h3 className="name">{item.name}</h3>
                            {/* This is will differ from abilties, we are using type */}
                            <p className="type-info">Electric</p>
                        </div>
                    </div> 
                </>
            )
        })
    }
  
    </>
    )
}

export default Card