import Header from './Header.jsx'
import Card from './Card.jsx'
import Load from './Load.jsx'

import { useEffect, useState } from 'react'


function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const daa = res.json()

    console.log(data)

    useEffect(() => {
      getAllPokemon()
    }, [])
  }

  return (
    <>
      <Header/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Load/>
    </>
  )
}

export default App
