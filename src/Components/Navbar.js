import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 10vh;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`  

const LinkContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Navbar = () => {

  const style = { 
    'textDecoration': 'none',
    'color': 'black',
  }
  return (
    <Container>
      <Link style={style} to="/mattsPortfolio/">Matt Higgins</Link>
      <LinkContainer>
        <Link style={style} to="/about">About</Link>
        <Link style={style} to="/skills">Skills</Link>
        <Link style={style} to="/projects">Projects</Link>
      </LinkContainer>
    </Container>
  )
}

export default Navbar