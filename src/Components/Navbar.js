import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 10vh;
  width: auto;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #192734;

  @media (max-width: 430px) {
    width: 100%;
    box-style: border-box;
    margin: 0px;
    padding: 0px;
  }
`  

const LinkContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 430px) {
    width: 60%;
    box-style: border-box;
  }
`

const Navbar = () => {
  const [selected, isSelected] = useState(false)
  const style = { 
    'textDecoration': 'none',
    'color': '#fff',
  }

  const logo = { 
    'textDecoration': 'none',
    'color': '#fff',
    'fontSize': '35px',
    'letterSpacing': '1.5px', 
    'fontWeight': '700'
  }

  return (
    <Container>
      <Link style={logo} to="/mattsPortfolio/">Matt Higgins</Link>
      <LinkContainer>
        <Link style={style} to="/home">Home</Link>
        <Link style={style} to="/about">About</Link>
        <Link style={style} to="/contact">Contact</Link>
      </LinkContainer>
    </Container>
  )
}

export default Navbar