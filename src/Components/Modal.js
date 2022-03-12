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
  width: 50vh;
  height: 50vw;
  background-color: black;
  z-index: 7;
  opacity: 06;
  color: white;
`

const Modal = ({ modalOpen, toggleModal }) => {
  return (
  <>
  {
    modalOpen ?  
      <ModalContainer>
        <Container>
          <MdClose style={{ position: "relative", cursor:"pointer", fontSize: "35px", margin: "10px" }}onClick={toggleModal}/>
          <h1>Example Name</h1>
          <img />
          <h4>Technologies:</h4>
          <button>open</button>
          <button>github</button>
        </Container>
      </ModalContainer> 
    : null
 
  }
  </>
  )
}

export default Modal 