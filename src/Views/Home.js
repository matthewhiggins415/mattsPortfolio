import React, { useState } from 'react'
import profile from '../Views/profile.png'
import styled from 'styled-components'
import KakeiboModal from '../Components/KakeiboModal'
import FullstackModal from '../Components/FullstackModal'
import PropertyModal from '../Components/PropertyModal'
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import kakeiboScreenshot from './kakeiboscreenshot.png'
import easyRentScreenshot from './easyrentscreenshot.png'
import goLocalScreenshot from './golocalscreenshot.png'


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

const IMG = styled(motion.img)`
  border-radius: 100%;
  width: 320px;
  height: 80%;
  max-height: 350px;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(233, 233, 233, 0.14);

  @media (max-width: 430px) {
    border-radius: 20px;
    background-color: transparent;
  }
  
`

const WordContainer = styled.div`
  color: white;
  margin-top: 10px;
  min-width: 35%;
  background-color: rgba(233, 233, 233, 0.14);
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(255, 45, 154, 0.8) 0px 0px 0.25em
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

const Section = styled(motion.div)`
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

const ProjectCard = styled(motion.div)`
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

  @media (max-width: 430px) {
    min-width: 250px;
  }
`

const SkillTopContainer = styled.div`
  display: flex;
  background-color: rgba(233, 233, 233, 0.14);
  border-radius: 15px;
  width: 90%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap; 
  justify-content: space-evenly;

  @media (max-width: 430px) {
    background-color: transparent;
}
`

const SkillContainer = styled(motion.div)`
  width: 40%;
  min-width: 300px;
  border-bottom: 4px solid rgba(255, 45, 154, 0.8);
  height: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 15px;
  text-align: center;
  color: #fff;

  @media (max-width: 430px) {
    background-color: rgba(211, 211, 211, 0.14);
    min-width: 250px;
    margin: 10px auto;
  }
`

const A = styled.a`
  padding: 15px;
  background-color: white;
  cursor: pointer; 
  border: none;
  text-decoration: none;
  underline: none;
  color: black;
  transition: 300ms ease-in-out;
  &:hover {
    background-color: rgba(255, 45, 154, 0.8);
    color: white;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`

const LinkContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Img = styled.img`
  height: 200px;
  width: 250px;
  object-fit: contain;
`


const Home = () => {
  const [modalOneOpen, setModalOneOpen] = useState(false)
  const [modalTwoOpen, setModalTwoOpen] = useState(false)
  const [modalThreeOpen, setModalThreeOpen] = useState(false)


  const toggleOneModal = () => {
    setModalOneOpen(!modalOneOpen)
  }
  
  const toggleTwoModal = () => {
    setModalTwoOpen(!modalTwoOpen)
  }

  const toggleThreeModal = () => {
    setModalThreeOpen(!modalThreeOpen)
  }

    return (
      <>
      <KakeiboModal modalOneOpen={modalOneOpen} toggleOneModal={toggleOneModal}/>
      <FullstackModal modalTwoOpen={modalTwoOpen} toggleTwoModal={toggleTwoModal}/>
      <PropertyModal modalThreeOpen={modalThreeOpen} toggleThreeModal={toggleThreeModal}/>
      <Container>
        <Section>
          <IMG src={profile} />
          <WordContainer>
            <H2>Software Engineer with a focus on frontend development.</H2>
            <LinkContainer>
              <a
                target="_blank"
                href="https://github.com/matthewhiggins415"
              >
              <AiFillGithub style={{ position: "relative", cursor:"pointer", fontSize: "35px", "marginTop": "10px", "marginLeft": "10px", color:"whitesmoke" }}/>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mhiggie/"
              >
              <AiFillLinkedin style={{ position: "relative", cursor:"pointer", fontSize: "35px", "marginTop": "10px", "marginLeft": "10px", color: "whitesmoke" }}/>
              </a>
            </LinkContainer>
          </WordContainer>
        </Section>
        <SkillSection
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
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
          <A href="mattsResume.pdf" download="Matt's Resume">Download resume</A>
        </SkillSection>
        <Section
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <ProjectContainer>
            <ProjectCard onClick={toggleTwoModal}>
              <h2>goLocal 🥕</h2>
              <p>A group project built with three other colleagues.  This eComm site enables users to buy locally sourced foods online.</p>
              <Img src={goLocalScreenshot} alt="goLocal sample image"/>
            </ProjectCard>
            <ProjectCard onClick={toggleOneModal}>
              <h2>kakeibo budgeting 💸</h2>
              <p>Full stack budgeting tool based on Japanese budgeting philosophy kakeibo, aka "the art of saving money".</p>
              <Img src={kakeiboScreenshot} alt="kakeibo sample image"/>
            </ProjectCard>
            <ProjectCard onClick={toggleThreeModal}>
              <h2>easyRent property manager 🏡</h2>
              <p>Full stack app to manage properties, tenants and tasks for those properties.</p>
              <Img src={easyRentScreenshot} alt="easyRent sample image"/>
            </ProjectCard>
          </ProjectContainer>
        </Section>
      </Container>
      </>
    )
}

export default Home 