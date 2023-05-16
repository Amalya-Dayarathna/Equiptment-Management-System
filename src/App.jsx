import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'


import NavBar from './components/NavBar'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Header/>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
      </Routes>

    </>
  )
}

export default App
