import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  width: 70%;
  height: 90%;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  color: grey;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
  color: grey;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;

  &:active {
    transition: 100ms;
    transform: translateY(6px);
    box-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
    1px 9px 3px rgba(16,16,16,0.4),
    1px 11px 5px rgba(16,16,16,0.2),
    1px 13px 17px rgba(16,16,16,0.2),
    1px 15px 30px rgba(16,16,16,0.4);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 100px
`;

const Contact = () => {

const ref = useRef();
const [success,setSuccess] = useState(null)

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
      .sendForm('service_xxsexf2', 'template_hwrmjbf', ref.current, {
        publicKey: 'LaLSL67fj23MVT4et',
      })
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
        },
        (error) => {
          console.log(error.text);
          setSuccess(false)
        },
      );
}

  return (
    <Section>
      <Container>
        <Left>
          <Map />
        </Left>
        <Right>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title className='textNav'>Contact Me</Title>
            <Input className='box' placeholder='Name' name='name' />
            <Input className='box' placeholder='Email' name='email'/>
            <TextArea className='box' rows={10} placeholder='Write your message' name='message' />
            <Button className='textBtn box' type='submit'>Send</Button>
            {success && 
              "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
