import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import Skills from './Views/Skills'
import About from './Views/About'
import Blog from './Views/Blog'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/about" element={< About/>}/>
        <Route path="/blog" element={< Blog/>}/>
        <Route path="/skills" element={< Skills/>}/>
      </Routes>
    </Router>
  );
}

export default App;
