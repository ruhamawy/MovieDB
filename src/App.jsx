import { useState } from 'react'

import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import MovieCard from './Components/MovieCard/MovieCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <MovieCard/>
      
    </>
  )
}

export default App
