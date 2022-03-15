import React, { useState } from 'react'
import profile from '../Views/profile.png'
import styled from 'styled-components'
import KakeiboModal from '../Components/KakeiboModal'

const Container = styled.div`
  width: 100vw;
  min-height: 90vh;
  height: auto;
  margin: 0 auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  background-color: #192734;
`

const IMG = styled.img`
  border-radius: 100%;
  width: 320px;
  height: 80%;
  max-height: 350px;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(233, 233, 233, 0.14);
  
`

const WordContainer = styled.div`
  color: white;
  margin-top: 10px;
  min-width: 35%;
  background-color: rgba(233, 233, 233, 0.14);
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(255, 45, 154, 0.8) 0px 1px 4px;
`

const ProjectContainer = styled.div`
  height: 70%;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const H2 = styled.h2`
  text-align: center;
  color: #fff;
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
`

const SkillSection = styled.div`
  width: 80%;
  min-height: 400px;
  height: auto;
  margin: 10px auto;
  background-color: rgba(211, 211, 211, 0.14); 
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  align-items: center;
  flex-wrap: wrap;
`

const ProjectCard = styled.div`
  height: auto;
  width: 30%;
  max-width: 275px;
  min-width: 200px;
  background-color: rgba(211, 211, 211, 0.14);
  color: white;
  overflow: hidden;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  transition: 200ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`

const SkillContainer = styled.div`
  width: 40%;
  min-width: 300px;
  border-bottom: 4px solid rgba(255, 45, 154, 0.8);
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 15px;
  text-align: center;
  color: #fff;
`

const SkillTopContainer = styled.div`
display: flex;
background-color: rgba(233, 233, 233, 0.14);
border-radius: 15px;
width: 90%;
margin: 0 auto;
padding: 20px;
flex-wrap: wrap; 
justify-content: space-evenly;

`

const Button = styled.button`
  padding: 15px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer; 
  border: none;
  &:hover {
    transition: 300ms ease-in-out;
    background-color: rgba(255, 45, 154, 0.8);
    color: white;
    border-radius: 15px;
  }
`


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  

    return (
      <>
      <KakeiboModal modalOpen={modalOpen} toggleModal={toggleModal}/>
      <Container>
        <Section>
          <IMG  src={profile}/>
          <WordContainer>
            <H2>Hello 👋🏻, I build fullstack web apps</H2>
          </WordContainer>
        </Section>
        <SkillSection>
          <SkillTopContainer>
          <SkillContainer>
            <H2>frontend</H2>
            <p>HTML, CSS, Javascript, React, styled-components, Redux, AJAX, JSON, Stripe api </p>
          </SkillContainer>
          <SkillContainer>
            <H2>backend</H2>
            <p>Express, Node, mongoDb, sql, postreSQL </p>
          </SkillContainer>
          </SkillTopContainer>
          <Button>Download resume</Button>
        </SkillSection>
        <Section>
          <ProjectContainer>
            <ProjectCard >
              <h2>fullstack eCommerce</h2>
              <p>eCommerce website integrating stripe api for payment processing.</p>
            </ProjectCard>
            <ProjectCard onClick={toggleModal}>
              <h2>kakeibo budgeting</h2>
              <p>Full stack budgeting tool based on Japanese budgeting philosophy kakeibo, aka "the art of saving money"</p>
            </ProjectCard>
            <ProjectCard >
              <h2>property manager</h2>
              <p>Full stack app to manage properties, tenants and tasks for those properties</p>
            </ProjectCard>
          </ProjectContainer>
        </Section>
      </Container>
      </>
    )
}

export default Home 