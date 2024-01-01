import Header from './Header.jsx'
import Card from './Card.jsx'

import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
