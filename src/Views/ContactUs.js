import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #192734;
  justify-content: center;
`

const Form = styled.form`
  padding: 15px;
  height: auto;
  width: 50%; 
  max-width: 450px;
  background-color: rgba(233, 233, 233, 0.14);
  border-radius: 15px; 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 630px) {
    width: 75%;
    margin: 0 auto;
    height: auto;
  }

  @media (max-width: 430px) {
    width: 90%;
    margin: 0 auto;
    height: auto;
  }
`

const H1 = styled.h1`
  color: white;
  text-align: center;
`

const SentH1 = styled(motion.h1)`
  color: white;
  padding: 15px; 
  border-radius: 15px; 
  background-color: rgba(233, 233, 233, 0.14);
`
const Input = styled(motion.input)`
  padding: 10px;
  outline: none;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  margin: 8px auto;
  width: 90%;
`
const Textarea = styled.textarea`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  height: 100px;
  font-family: Arial;
  margin: 8px auto;
  width: 90%;
`

export const ContactUs = () => {
  const form = useRef();
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7qg7crn', 'template_cu3saq8', form.current, '6VTPrDcj2tpepyKyb')
      .then((result) => {
          if (result.text === "OK") {
            console.log('all good here.')
            setSent(true)
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container>
      {
        sent ? 
        <SentH1
        animate={{
          x: 0,
          y: -100,
          scale: 1,
          rotate: 0,
        }}
        >
          Sent ✅
        </SentH1> : 
      <Form ref={form} onSubmit={sendEmail}>
        <H1>Send a message</H1>
        <Input placeholder="Name" type="text" name="user_name" required/>
        <Input placeholder="Email" type="email" name="user_email" required/>
        <Textarea placeholder="Message" name="message" required/>
        <Input type="submit" value="Send" whileHover={{ scale: 1.05, cursor: 'pointer'}}/>
      </Form>
      }
    </Container>
  );
};