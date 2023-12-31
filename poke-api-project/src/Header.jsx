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

export default Header