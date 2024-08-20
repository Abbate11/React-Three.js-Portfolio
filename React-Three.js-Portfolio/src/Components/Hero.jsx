import React from 'react';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Nav from './Nav';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 320px;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100%;
  align-self: center;
  width: 80%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  width: 50%;

  @media only screen and (max-width: 768px) {
    align-items: center;
    padding-top: 15px;
  }
`;

const Title = styled.div`
  font-size: 120px;
  color: black;
  padding: 10px;
  padding-right: 50px;
  width: 600px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    margin: 10px;
    margin-top: 15px;
  }
`;

const P = styled.a`
  color: white;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    padding-top: 10px;
  }
`;

const Line = styled.img`
  height: 5px;
  padding-top: 2px;

  @media only screen and (max-width: 768px) {
    padding-top: 5px;
  }
`;

const Subtitle = styled.h2`
  color: greenyellow	;
  font-size: 25px;
`;

const Desc = styled.p`
  font-size: 25px;
  color: lightgrey;

  @media only screen and (max-width: 768px) {
    padding-bottom: 10px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color:whitesmoke;
  color: greenyellow;
  font-weight: 700;
  width: 120px;
  padding: 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow .15s,transform .15s;

  &:active {
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

  @media only screen and (max-width: 768px) {
    width: 150px;
  }
`;

const Right = styled.div`
    width: 50%;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;


const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section>
      <Nav />
      <Container>
        <Left>
          <Title className='textNav insetBox'>Think<P>.</P> Make<P>.</P> Solve<P>.</P></Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle className='textNav'>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy building efficient and creative digital solutions.</Desc>
          <Button onClick={() => scrollToSection('works')} className='textBtn box'>Learn More</Button>
        </Left>
        <Right>
          <Canvas shadows>
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={1.5} />
            <directionalLight 
            castShadow
            position={[-5, 5, 3]} 
            intensity={2}
            />
            <Sphere args={[2.3, 250, 250]} position={[0, 0, 0]}>
              <MeshDistortMaterial color="greenyellow" distort={0.4} speed={2} />
            </Sphere>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
