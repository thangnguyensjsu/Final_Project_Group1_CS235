import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import './App.css'
import Landing from './components/pages/Landing';
import Search from './components/pages/Search';
import Menu from './components/pages/Menu';
import Orders from './components/pages/Orders';
import Checkout from './components/pages/Checkout';
import OrderConfirm from './components/pages/OrderConfirm';
import Register from './components/pages/Register';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/confirm" element={<OrderConfirm/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
