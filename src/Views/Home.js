import React, { useState } from 'react'
import profile from '../Views/profile.png'
import styled from 'styled-components'
import Modal from '../Components/Modal'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  background-color: #192734;
`
const TopContainer = styled.div`
  width: 90%;
  display: flex;
  padding: 15px;
  border-radius: 15px;
  background-color: rgba(211, 211, 211, 0.14);
  min-height: 40%;
  max-height: 50%;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px auto;
`

const InfoContainer = styled.div`
  height: 100%;
  width: 30%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const IMG = styled.img`
  border-radius: 100%;
  width: 320px;
  height: 80%;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(233, 233, 233, 0.14);
`

const WordContainer = styled.div`
  color: white;
  min-width: 35%;
  background-color: rgba(233, 233, 233, 0.14);
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const BottomContainer = styled.div`
  width: 90%;
  display: flex;
  padding: 15px;
  border-radius: 15px;
  background-color: rgba(211, 211, 211, 0.14);
  min-height: 40%;
  max-height: 50%;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px auto;
  flex-direction: column;
`

const ProjectContainer = styled.div`
  height: 70%;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
`

const H2 = styled.h2`
  text-align: center;
  color: #fff;
`

const ProjectCard = styled.div`
  width: 200px;
  height: auto;
  background-color: rgba(211, 211, 211, 0.14);
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  transition: 200ms ease-in-out;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  

    return (
      <>
      <Modal modalOpen={modalOpen} toggleModal={toggleModal}/>
      <Container>
        <TopContainer>
          <IMG  src={profile}/>
          <InfoContainer>
            <WordContainer>
              <h1>Hello 👋🏻, I'm Matt Higgins</h1>
              <H2>and I build fullstack web apps</H2>
            </WordContainer>
          </InfoContainer>
        </TopContainer>
        <BottomContainer>
          <H2>Here's a few fun projects...</H2>
          <ProjectContainer>
            <ProjectCard>
              <h2>fullstack eCommerce</h2>
              <p>eCommerce website integrating stripe api for payment processing.</p>
            </ProjectCard>
            <ProjectCard>
              <h2>kakeibo budgeting</h2>
              <p>Full stack budgeting tool based on Japanese budgeting philosophy kakeibo, aka "the art of saving money"</p>
            </ProjectCard>
            <ProjectCard onClick={toggleModal}>
              <h2>property manager</h2>
              <p>Full stack app to manage properties, tenants and tasks for those properties</p>
            </ProjectCard>
          </ProjectContainer>
        </BottomContainer>
      </Container>
      </>
    )
}

export default Home 