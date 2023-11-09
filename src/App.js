import React from 'react'
import {Route, Routes} from "react-router-dom";
import Login from './components/Login'
import Products from './components/Products'
import Canteen from './components/Canteen';

function App() {
  return (
    
  <div>
   
   <Routes>
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/products' element={<Products></Products>}></Route>
    <Route path='/canteen' element={<Canteen></Canteen>}></Route>
   </Routes>
  </div>
   
  )
}

export default App
