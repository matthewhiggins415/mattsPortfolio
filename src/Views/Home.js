import profile from '../Views/profile.png'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const IMG = styled.img`
border-radius: 100%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const WordContainer = styled.div`
  color: gray;
`

const H2 = styled.h2`
  text-align: center;
`

const Home = () => {
    return (
      <Container>
        <IMG  src={profile}/>
        <WordContainer>
          <h1>Fullstack Developer</h1>
          <H2>using MERN stack</H2>
        </WordContainer>
      </Container>



    )
}

export default Home 