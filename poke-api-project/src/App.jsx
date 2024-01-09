import Header from './Header.jsx'
import Card from './Card.jsx'
import Load from './Load.jsx'
import axios from 'axios'

import { useEffect, useState } from 'react'



function App() {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

  const pokeFun=async () => {
    setLoading(true)
    const res=await axios.get(url)
    console.log(res.data.results)
  }

  useEffect(() => {
    pokeFun() 
  }, [url])

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
