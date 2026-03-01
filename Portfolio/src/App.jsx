import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import NotFound from './Component/NotFound'



const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route index element={<Home/>} />
  
  <Route path='*' element ={<NotFound/>}/>
</Routes>
</BrowserRouter>
    </>
   
  )
}

export default App
