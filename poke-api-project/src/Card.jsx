
import React from 'react'
 /*import pokeAvatar from 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' */

// Pokemon profile card: includes container, image, and type

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
                            <h2 className="id">{item.id}</h2>
                            <h3 className="name">{item.name}</h3>
                            {/* <p className="type-info">{}</p> */}
                            {console.log("item.types", item.types)}
                            
                           {item.types.map((type) => <p>{type.type.name}</p>)}
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