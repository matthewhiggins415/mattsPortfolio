import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

const ModalContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  position: fixed;
  z-index: 5;
  top: 0;
  background: rgba(204, 204, 204, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 50%;
  height: fit-content;
  padding: 15px;
  background-color: black;
  z-index: 7;
  opacity: 06;
  color: white;
  border-radius: 15px;

  @media (max-width: 630px) {
    width: 80%;
  }
`

const H1 = styled.h1`
  color: white;
  text-align: center;
  border-bottom: 3px solid rgba(255, 45, 154, 0.8);
  padding-bottom: 10px;
`

const A = styled.a`
  border: none;
  width: 150px;
  height: auto;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: rgba(233, 233, 233, 0.14);
  cursor: pointer;
`
const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const KakeiboModal = ({ modalOneOpen, toggleOneModal }) => {
  return (
  <>
  {
    modalOneOpen ?  
    <AnimatePresence>
      <ModalContainer
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "calc(100vw - 100%)", opacity: 1 }}
        exit={{ x: "0%", opacity: 0 }}
      >
        <Container>
          <MdClose style={{ position: "relative", cursor:"pointer", fontSize: "35px", "marginTop": "10px", "marginLeft": "10px" }} onClick={toggleOneModal}/>
          <H1>Kakeibo</H1>
          <div style={{position: "relative", "paddingBottom": "56.25%", height: "0px"}}>
            <iframe title="kakeibo demo"
            src="https://www.loom.com/embed/fb67219748614f2198bf0f78eea1b53b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%"}}>
            </iframe>
          </div>
          <ButtonContainer>
            <A href="https://matthewhiggins415.github.io/kakeibofrontend/" target="_blank">to live site</A>
            <A href="https://github.com/matthewhiggins415/kakeibofrontend" target="_blank">to github</A>
          </ButtonContainer>
          <div>
            <p>Frontend: React, styled-components, framer-motion, axios, apexcharts</p>
            <p>Backend: Express, Mongodb, Mongoose</p>
          </div>
        </Container>
      </ModalContainer> 
    </AnimatePresence>   
    : null
  }
  </>
  )
}

export default KakeiboModal 