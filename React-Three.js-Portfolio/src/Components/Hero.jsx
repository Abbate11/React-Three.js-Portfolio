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
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  align-self: center;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 100px;
  color: black;
  padding: 10px;
`;

const P = styled.a`
  color: white;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: greenyellow	;
  font-size: 20px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color:whitesmoke;
  color: greenyellow;
  font-weight: 700;
  width: 100px;
  padding: 10px;
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
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 700px;
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 1.8s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
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
          <Desc>I enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button onClick={() => scrollToSection('works')} className='textBtn box'>Learn More</Button>
        </Left>
        <Right>
          <Canvas style={{ width: '100%', height: '100%' }} shadows>
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={1.5} />
            <directionalLight 
            castShadow
            position={[-5, 5, 3]} 
            intensity={2}
            // shadow-mapSize-width={1024}
            // shadow-mapSize-height={1024}
            />
            <Sphere args={[2.3, 250, 250]} position={[0, 0, 0]}>
              <MeshDistortMaterial color="greenyellow" distort={0.4} speed={2} />
            </Sphere>
          </Canvas>
          {/* <Img src="./img/moon.png" /> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
