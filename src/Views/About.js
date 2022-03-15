import styled from 'styled-components'

import bbq from '../Resources/bbq.jpg'
import motorcycle from '../Resources/motorcycle.jpg'
import thumbsUp from '../Resources/thumbsUp.jpg'

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

const Img = styled.img`
  width: 250px;
  height: 300px;
  position: center;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
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
        <Img src={thumbsUp}></Img>
        <MessageContainer>
          <H2>
            From Bay Area, California and I am 29 years old. Programming is special to me because it is a skill I build upon every day and I can take it anywhere. 
          </H2>
        </MessageContainer>
      </Section>
      <Section>
        <MessageContainer>
          <H2>
            Not a cook but love to eat. Indian and Mexican foods are my favorite.
          </H2>
        </MessageContainer>
        <Img src={bbq}></Img>
      </Section>
      <Section>
        <Img src={motorcycle}></Img>
        <MessageContainer>
          <H2>I like to travel by motorcycle whenever possible, always fun. This is Laos here 🇱🇦.
          </H2>
        </MessageContainer>
      </Section>
    </Container>
  )
}

export default About