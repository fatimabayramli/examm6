import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Pages/Layout'
import Home from './Pages/Home/index'
import Basket from './Pages/Basket/index'
import Add from './Pages/Add/index'
import WishList from './Pages/WishList/index'
import Detail from './Pages/Detail'

function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
