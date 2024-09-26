import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text, OrbitControls, Points } from '@react-three/drei';
import { PointsMaterial } from 'three';
import { useFrame, Canvas } from '@react-three/fiber';
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 320px;
`;

const Container = styled.div`
  height: 100%;
  align-self: center;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 5%;
  }

  @media only screen and (max-width: 768px) {
    gap: 0%;
  }
`;

const Left = styled.div`
  width: 60%;
  height: 60%;
  max-width: 1000px;
  display: flex;
  background-color: #0f0f0f;
  border-radius: 2rem;
  margin-bottom: 5%;

  @media only screen and (max-width: 1200px) {
    height: 40vh;
    width: 40vw;
  }

  @media only screen and (max-width: 768px) {
    height: 30vh;
    width: 50vw;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media only screen and (max-width: 1200px) {
    align-items: center;
    margin-top: 5%;
    gap: 0;
  }
`;

const Title = styled.div`
  font-size: 7.5rem;
  color: black;
  background-color: whitesmoke;
  padding: 0vw 3vw 0.5vw 0.5vw;
  width: fit-content;
  height: auto;
  margin-top: 5%;
  margin-bottom: 4%;

  @media only screen and (max-width: 1200px) {
    font-size: 5rem;
    margin-top: 20%;
    width: 50vw;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    width: 50vw;
    text-align: center;
 }
`;

const A = styled.a`
  font-size: 75px;

  @media only screen and (max-width: 1500px) {
    font-size: 71px;
  }

  @media only screen and (max-width: 1350px) {
    font-size: 56px;
  }

  @media only screen and (max-width: 1225px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 37px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }
`
const B = styled.div`
  display: inline-block;
`

const P = styled.a`
  color: greenyellow;
`

const Subtitle = styled.h2`
    color: greenyellow;
    font-size: 2rem;
    padding-top: 1%;
    margin: 0;
    margin-bottom: 4%;

    @media only screen and (max-width: 1200px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media only screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Name = styled.p`
  color: greenyellow;
  margin: 0;
`


const Desc = styled.p`
    font-size: 2rem;
    color: lightgrey;
    margin: 0;
    margin-bottom: 4%;

    @media only screen and (max-width: 1200px) {
      font-size: 1.5rem;
      text-align: center;
  }

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: center;
    }
`;

const Button = styled.button`
  background-color: whitesmoke;
  color: greenyellow;
  font-weight: 700;
  width: 120px;
  padding: 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow .15s ease, transform .15s ease, translate 0.2s ease;

  &:hover {
    translate: 0 -3%;
  }

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

const Particles = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * -0.5;
  });

  const particles = Array.from({ length: 150 }, () => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  ]);

  return (
    <group ref={ref}>
      {particles.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="greenyellow" />
        </mesh>
      ))}
    </group>
  );
};

const Who = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Shape = () => {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0, 0, 4.5]} />
            <color attach="background" args={['lime']} />
            <Text ref={textRef} fontSize={2} color='grey' position={[0, 0, 0]}>
              Hello
            </Text>
          </RenderTexture>
        </meshPhongMaterial>
      </mesh>
    )
  }

  return (
    <Section>
      <Container>
        <Left className='insetBoxWhite'>
          <Canvas camera={{ fov: 40, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={false} autoRotateSpeed={5} enablePan={false} />
            <ambientLight intensity={3} />
            <directionalLight intensity={3} position={[0, 5, 0]} />
            <pointLight intensity={2} position={[0, 0, 5]} />
            <Particles />
            <Shape />
          </Canvas>
        </Left>
        <Right>
          <Title className='textNav insetBox'>Think outside <B>the[<A>box<P>.</P></A>]</B></Title>
          <Subtitle className='textNav'>- Who I am</Subtitle>
          <Desc><Name>My name is Christian,</Name>I enjoy the challenge of programming, and the satisfaction of seeing a project through to it's completion.</Desc>
          <Button onClick={() => scrollToSection('projects')} className='textBtn box'>See my works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who