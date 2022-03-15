import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import Skills from './Views/Skills'
import About from './Views/About'
import Projects from './Views/Projects'
import GlobalStyle from './globalStyles'

const Container = styled.div`
  width: 0px;
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>
      <Routes>
        <Route path="/mattsPortfolio/" element={< Home/>}/>
        <Route path="/home" element={< Home/>}/>
        <Route path="/about" element={< About/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={< Skills/>}/>
      </Routes>
    </Router>
  );
}

export default App;
