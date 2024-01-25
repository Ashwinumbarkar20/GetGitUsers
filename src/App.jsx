import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Repopage from './Pages/Repository/Repopage'
 
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
         <Route path={`/Repopage/:username/:reponame`} element={ <Repopage/> } />
        {/*<Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </>
  )
}

export default App
