import React from 'react'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Shape from './Shape';
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    height: 100%;
    align-self: center;
    width: 70%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-size: 100px;
   color: black;
   padding: 10px;
`;

const A = styled.a`
  font-size: 75px;
`
const P = styled.a`
  color: greenyellow;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
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
    color: greenyellow;
    font-size: 20px
`;

const Desc = styled.p`
    font-size: 24px;
    color: whitesmoke;
    padding: 30px
`;

const Button = styled.button`
    background-color:  whitesmoke;
    color: greenyellow;
    font-weight: 700;
    width: 120px;
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

const Who = () => {

  const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={5} enablePan={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Shape />
          </Canvas>
        </Left>
        <Right>
          <Title className='textNav insetBox'>Think outside the [<A>box<P>.</P></A>]</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle className='textNav'>Who I am</Subtitle>
          </WhatWeDo>
          <Desc className='insetBox insetText textDesc'>A Creative designer and developer with a passion for the Arts</Desc>
            <Button onClick={() => scrollToSection('projects')} className='textBtn box'>See my works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who