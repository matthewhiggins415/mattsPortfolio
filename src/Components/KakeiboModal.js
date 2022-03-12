import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import ReactPlayer from 'react-player'

const ModalContainer = styled.div`
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
  height: 90%;
  padding: 15px;
  background-color: black;
  z-index: 7;
  opacity: 06;
  color: white;
  border-radius: 15px;
`

const H1 = styled.h1`
  color: white;
  text-align: center;
  border-bottom: 3px solid rgba(233, 233, 233, 0.14);
  padding-bottom: 10px;
`

const Button = styled.button`
  padding: 20px;
  border: none;
  width: 150px;
  height: 70px;
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

const KakeiboModal = ({ modalOpen, toggleModal }) => {
  return (
  <>
  {
    modalOpen ?  
      <ModalContainer>
        <Container>
          <MdClose style={{ position: "relative", cursor:"pointer", fontSize: "35px", "marginTop": "10px", "marginLeft": "10px" }}onClick={toggleModal}/>
          <H1>Kakeibo</H1>
          <div style={{position: "relative", "paddingBottom": "56.25%", height: "0px"}}>
            <iframe 
            src="https://www.loom.com/embed/fb67219748614f2198bf0f78eea1b53b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%"}}>
            </iframe>
          </div>
          <ButtonContainer>
            <Button>open</Button>
            <Button>github</Button>
          </ButtonContainer>
        </Container>
      </ModalContainer> 
    : null
 
  }
  </>
  )
}

export default KakeiboModal 