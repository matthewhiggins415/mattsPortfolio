import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

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
  height: auto;
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

const FullstackModal = ({ modalTwoOpen, toggleTwoModal }) => {
  return (
  <>
  {
    modalTwoOpen ?  
      <ModalContainer>
        <Container>
          <MdClose style={{ position: "relative", cursor:"pointer", fontSize: "35px", "marginTop": "10px", "marginLeft": "10px" }} onClick={toggleTwoModal}/>
          <H1>Fullstack eCommerce</H1>
          <ButtonContainer>
            <A href="https://matthewhiggins415.github.io/kakeibofrontend/" target="_blank">frontend github</A>
            <A href="https://github.com/matthewhiggins415/kakeibofrontend" target="_blank">backend github</A>
          </ButtonContainer>
          <div>
            <p>Frontend: Javascript, html, css, jquery</p>
            <p>Backend: Express, Mongodb, Mongoose</p>
          </div>
        </Container>
      </ModalContainer> 
    : null
 
  }
  </>
  )
}

export default FullstackModal 