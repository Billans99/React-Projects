import Header from './Header.jsx'
import Cards from './Cards.jsx'
import Load from './Load.jsx'
import axios from 'axios'

import { useEffect, useState } from 'react'



function App() {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  const pokeFun=async () => {
    console.log("preloading", loading)
    setLoading(true)
    console.log("postloading", loading)
    const res=await axios.get(url)
    console.log(res)
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    getPokemon(res.data.results)
    setLoading(false) 
    // console.log(pokeData)
  }
  const getPokemon=async(res) => {
    res.forEach(async(item) => {
      const result=await axios.get(item.url)
      console.log("result", result)
      setPokeData(state => {
        state=[...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state
      })
    })
    
  }
  console.log("pokeData", pokeData)

  useEffect(() => {
    setPokeData([])
    pokeFun() 
  }, [url])

  return (
    <>
      <Header/>
      <Cards pokemon={pokeData} loading={loading}/>
      <Load/>
    </>
  )
}

export default App
