import styled from 'styled-components'

// import wireframe from '../Resources/wireframe.jpg'
import wireframeUI from '../Resources/kakeiboUI.jpg'
import motorcycle from '../Resources/motorcycle.jpg'

const Container = styled.div`
 box-sizing: border-box;
 margin: 0;
 padding: 0;
 height: auto; 
 width: 100vw;
 background-color: #192734;
 margin: 0 auto;
 position: absolute;
 display: flex;
 flex-direction: column;
 align-items: center;
`

const Section = styled.div`
  width: 80%;
  min-height: 400px;
  height: auto;
  margin: 10px auto;
  background-color: rgba(211, 211, 211, 0.14); 
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`

const ImgOne = styled.img`
  width: 300px;
  height: 300px;
  position: center;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
`

const ImgTwo = styled.img`
  width: 300px;
  height: 300px;
  position: center;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
`

const ImgThree = styled.img`
  width: 300px;
  height: 300px;
  position: center;
  object-fit: contain;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  background-color: white;
`

const MessageContainer = styled.div`
  width: 300px;
  border-bottom: 4px solid rgba(255, 45, 154, 0.8);
`

const H2 = styled.h2`
  text-align: center;
  color: #fff;
`

const About = () => {
  return (
    <Container>
      <Section>
        <ImgOne src={motorcycle}></ImgOne>
        <MessageContainer>
          <H2>
            From Bay Area, California and I am 29 years old. Programming is special to me because it is a skill I build every day and I can take it anywhere. 
          </H2>
        </MessageContainer>
      </Section>
      <Section>
        {/* <ImgTwo src={wireframe}></ImgTwo> */}
        <MessageContainer>
          <H2>
            I love the satisfaction of taking an idea and turning into something useful and real. Taking a doodle..
          </H2>
        </MessageContainer>
      </Section>
      <Section>
        <ImgThree src={wireframeUI}></ImgThree>
        <MessageContainer>
          <H2>..And turning it into something users can interact with. Something I can say I built. 
          </H2>
        </MessageContainer>
      </Section>
    </Container>
  )
}

export default About