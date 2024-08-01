import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Product from '../pages/Product'
import About from '../pages/About'
import Account from '../pages/Account'
import {Routes, Route} from 'react-router-dom'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/about" element={<About />} />
    <Route path="/account" element={<Account />} />

  </Routes>
    
}

export default Routers
