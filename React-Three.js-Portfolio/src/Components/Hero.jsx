import React from 'react';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Nav from './Nav';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
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

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 20px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 700;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

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
          <Title className='textNav insetBox'>Think. Make. Solve.</Title>
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
              <MeshDistortMaterial color="#310a4f" distort={0.4} speed={2} />
            </Sphere>
          </Canvas>
          {/* <Img src="./img/moon.png" /> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
