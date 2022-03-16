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
`  

const LinkContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Navbar = () => {
  const [selected, isSelected] = useState(false)
  const style = { 
    'textDecoration': 'none',
    'color': '#fff',
  }

  

  return (
    <Container>
      <Link style={style} to="/mattsPortfolio/">Matt Higgins</Link>
      <LinkContainer>
        <Link style={style} to="/home">Home</Link>
        <Link style={style} to="/about">About</Link>
      </LinkContainer>
    </Container>
  )
}

export default Navbar