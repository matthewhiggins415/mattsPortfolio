import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import Skills from './Views/Skills'
import About from './Views/About'
import Projects from './Views/Projects'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/mattsPortfolio/" element={< Home/>}/>
        <Route path="/about" element={< About/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={< Skills/>}/>
      </Routes>
    </Router>
  );
}

export default App;
