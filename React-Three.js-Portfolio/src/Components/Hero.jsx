import React, { useRef } from 'react';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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

  @media only screen and (max-width: 1700px) {
    font-size: 110px;
    width: 450px;
  }

  @media only screen and (max-width: 1500px) {
    font-size: 100px;
    width: 400px;
  }

  @media only screen and (max-width: 1350px) {
    font-size: 90px;
    width: 375px;
  }

  @media only screen and (max-width: 1225px) {
    font-size: 80px;
    width: 350px;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 70px;
    width: 320px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 65px;
    width: 300px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    margin: 10px;
    margin-top: 15px;
  }
`;

const P = styled.a`
  color: white;
`;

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
  color: greenyellow;
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
  height: 100%;
  display: flex;

  @media only screen and (max-width: 2000px){
    
  }

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

  const ResponsiveSphere = () => {
    const { viewport } = useThree(); // Get viewport size
    const sphereRef = useRef();

    // Adjust sphere size and other properties dynamically based on multiple breakpoints
    useFrame(() => {
      // console.log("Viewport width: ", viewport.width);
      let scale = 1.05; // Default scale for large screens
      let distort = 0.37; // Default distort value

      if (viewport.width <= 6) {
        scale = 0.95;  // For tablets/small laptops
        distort = 0.35; // Less distortion on smaller screens
      }

      if (viewport.width <= 5.75) {
        scale = 0.9;  // For mobile devices
        distort = 0.35; // Even less distortion on very small screens
      }

      if (viewport.width <= 5.5) {
        scale = 0.85;  // For mobile devices
        distort = 0.35; // Even less distortion on very small screens
      }

      if (viewport.width <= 5.25) {
        scale = 0.8;  // For mobile devices
        distort = 0.35; // Even less distortion on very small screens
      }

      if (viewport.width <= 5) {
        scale = 0.85;  // For mobile devices
        distort = 0.35; // Even less distortion on very small screens
      }

      // Apply scale and distortion changes
      sphereRef.current.scale.set(scale, scale, scale);
      sphereRef.current.material.distort = distort;
    });

    return (
      <Sphere ref={sphereRef} args={[2.3, 250, 250]} position={[0, 0, 0]}>
        <MeshDistortMaterial color="greenyellow" distort={0.4} speed={2} />
      </Sphere>
    );
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
            <ResponsiveSphere />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

