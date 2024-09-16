import React, { useRef, useEffect, useState } from 'react';
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
`

const Container = styled.div`
  height: 100%;
  align-self: center;
  width: 80%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
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
  gap: 4.5%;
  width: 50%;

  @media only screen and (max-width: 1700px) {
    gap: 4%;
  }

  @media only screen and (max-width: 1500px) {
    gap: 3%;
  }

  @media only screen and (max-width: 1200px) {
    align-items: center;
    padding-top: 15px;
  }
`;

const Title = styled.div`
  font-size: 120px;
  color: black;
  background-color: whitesmoke;
  padding: 10px;
  padding-right: 50px;
  width: 600px;

  @media only screen and (max-width: 1700px) {
    font-size: 110px;
    width: 450px;
    padding-right: 100px;
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
    margin-top: 10px;
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

const Subtitle = styled.h2`
  color: greenyellow;
  font-size: 25px;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    padding-top: 10px;
  }
`;

const Desc = styled.p`
  font-size: 27px;
  color: lightgrey;

  @media only screen and (max-width: 1200px) {
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
    const { viewport } = useThree(); 
    const sphereRef = useRef();

    
    useFrame(() => {
      let scale = 1.05;
      let distort = 0.37;
      console.log("Viewport width: ", viewport.width);

      if (viewport.width <= 6) {
        scale = 0.95; 
      }

      if (viewport.width <= 5.5) {
        scale = 0.9;  
      }

      if (viewport.width <= 5) {
        scale = 0.85;  
      }

      if (viewport.width <= 4.5) {
        scale = 0.8;  
      }

      if (viewport.width <= 4) {
        scale = 0.65; 
      }

      if (viewport.width <= 3.5) {
        scale = 0.6; 
      }

      if (viewport.width <= 3) {
        scale = 0.5; 
      }

      if (viewport.width <= 2.5) {
        scale = 0.4; 
      }

      if (viewport.width <= 2) {
        scale = 0.3; 
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

  const LightWithMouse = () => {
    const lightRef = useRef();
    const { size } = useThree();
    const [mousePos, setMousePos] = useState([0, 0]);

    useEffect(() => {
      const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        setMousePos([x * size.width, y * size.height]);
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [size]);

    useFrame(() => {
      if (lightRef.current) {
        lightRef.current.position.set(mousePos[0], mousePos[1], 3);
      }
    });

    return <directionalLight ref={lightRef} castShadow intensity={1.5} />;
  };

  return (
    <Section>
      <Nav />
      <Container>
        <Left>
          <Title className='textNav insetBox'>
            Think<P>.</P> Make<P>.</P> Solve<P>.</P>
          </Title>
          <WhatWeDo>
            <Subtitle className='textNav'>- What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy building comprehensive and effective digital solutions.</Desc>
          <Button onClick={() => scrollToSection('works')} className='textBtn box'>
            Learn More
          </Button>
        </Left>
        <Right>
          <Canvas shadows>
            <OrbitControls enableZoom={false} enablePan={false} />
            <LightWithMouse /> 
            <ResponsiveSphere />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

