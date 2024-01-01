import React from 'react'
import logo from './assets/pokedex-paradise-logo.png'

function Header() {
    return(
        <>
            <div className="heading-container">
                <img className="logo" src={logo} alt="Pokedex Paradise logo"></img>
                <h1 className ="heading">Pokedex Paradise</h1>
            </div>
        </>
    )
}
/*
 TO DO: comment code, make cards into flex rows
*/

export default Header