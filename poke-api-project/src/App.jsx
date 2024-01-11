import Header from './Header.jsx'
import Cards from './Cards.jsx'
import Load from './Load.jsx'
import axios from 'axios'

import { useEffect, useState } from 'react'

function App() {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  const pokeFun=async () => {
    if (loading) return

    setLoading(true)
    console.log("postloading", loading)
    const res=await axios.get(url)
    console.log(res)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    await getPokemon(res.data.results)
    setLoading(false)
    // console.log(pokeData)
  }
  const getPokemon=async(res) => {
    const responses = await Promise.all(
      res.map((pokemon) => {
        return axios.get(pokemon.url)
      })
    )

    const newPokeData = responses.map((pokemon) => pokemon.data)
    setPokeData(newPokeData)
  }

  useEffect(() => {
    pokeFun()
  }, [])

  return (
    <>
      <Header/>
      <Cards pokemon={pokeData} loading={loading}/>
      <Load/>
    </>
  )
}

export default App