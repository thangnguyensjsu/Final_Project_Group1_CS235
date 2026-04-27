import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import './App.css'
import Landing from './components/pages/Landing';
import Search from './components/pages/Search';
import Menu from './components/pages/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
