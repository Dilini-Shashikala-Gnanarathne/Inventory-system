import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Product from '../pages/Product'
import About from '../pages/About'
import Details from '../pages/Details'
import Account from '../pages/Account'
import {Routes, Route} from 'react-router-dom'


const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/details" element={<Details />} />
    <Route path="/product" element={<Product />} />
    <Route path="/about" element={<About />} />
    <Route path="/account" element={<Account />} />
  </Routes>
    
}

export default Routers