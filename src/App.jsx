import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Repopage from './Pages/Repository/Repopage'
import Followers from './Pages/Followers/Followers'
 
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
         <Route path={`/Repopage/:username/:reponame`} element={ <Repopage/> } />
        <Route path={`/Followers/:username`} element={ <Followers/> } />
      </Routes>
    </>
  )
}

export default App
