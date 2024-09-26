import React, {useState, useRef, useEffect } from 'react';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Nav from './Nav';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

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
  align-items: center;
  gap: 10%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
  }

  @media only screen and (max-width: 768px) {
    gap: 0%;
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

const P = styled.span`
  color: orange;
`;

const Subtitle = styled.h2`
  color: orange;
  font-size: 2rem;
  padding-top: 2%;
  
  @media only screen and (max-width: 1200px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 2rem;
  color: lightgrey;
  padding-bottom: 1%;

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
  color: orange;
  font-weight: 700;
  width: 120px;
  padding: 15px;
  font-size: 1rem;
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
    width: fit-content;
    font-size: 0.75rem;
  }
`;

const Right = styled.div`
  width: 60vw;
  height: 60vh;
  max-width: 1000px;
  display: flex;
  background-color: #0f0f0f;
  border-radius: 2rem;
  margin-bottom: 5%;
  position: relative;

  @media only screen and (max-width: 1200px) {
    height: 40vh;
    width: 40vw;
  }

  @media only screen and (max-width: 768px) {
    height: 30vh;
    width: 50vw;
    margin-top: 10%;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: ${(props) => (props.isOn ? 'orange' : 'whitesmoke')};
  position: absolute;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
  z-index: 20;
  transition: color 0.2s ease, scale 0.2s ease;

  &:hover {
    scale: 1.1;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const PowerIcon = ({ isOn, onClick }) => {
  return (
    <div>
      <StyledIcon icon={faLightbulb} isOn={isOn} onClick={onClick}/>
    </div>
  )
}


const Hero = () => {
  const [lightsOn, setLightsOn] = useState(false);

  const toggleLights = () => {
    setLightsOn((prev) => !prev);
  };

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
      let scale = 0.8;
      let distort = 0.37;

      if (viewport.width <= 6) scale = 0.8;
      if (viewport.width <= 5.5) scale = 0.75;
      if (viewport.width <= 5) scale = 0.7;
      if (viewport.width <= 4.5) scale = 0.65;
      if (viewport.width <= 4) scale = 0.6;
      if (viewport.width <= 3.5) scale = 0.55;
      if (viewport.width <= 3) scale = 0.5;
      if (viewport.width <= 2.5) scale = 0.4;
      if (viewport.width <= 2) scale = 0.3;

      // Apply scale and distortion changes
      sphereRef.current.scale.set(scale, scale, scale);
      sphereRef.current.material.distort = distort;
    });

    return (
      <Sphere ref={sphereRef} args={[2.3, 250, 250]} position={[0, 0.65, 0]} castShadow={lightsOn}>
        <MeshDistortMaterial color="orange" distort={0.4} speed={2} />
      </Sphere>
    );
  };

  const GroundPlane = () => {
    return (
      <mesh rotation={[-Math.PI / 1.7, 0, 0]} position={[0, -2.5, 0]} receiveShadow={lightsOn}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={lightsOn ? 1 : 0} />
      </mesh>
    );
  };

  const LightsOn = () => {
    const directionalLightRef = useRef();
    const ambientLightRef = useRef();

    useEffect(() => {
      let startTime = null;
      const duration = 300; // Duration in ms

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        if (directionalLightRef.current) {
          directionalLightRef.current.intensity = lightsOn ? progress * 2.5 : 2.5 * (1 - progress);
        }

        if (ambientLightRef.current) {
          ambientLightRef.current.intensity = lightsOn ? 0.3 * progress : 0.3 * (1 - progress);
        }

        if (elapsed < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);

    }, [lightsOn]);

    return (
      <>
        <directionalLight
          ref={directionalLightRef}
          castShadow={lightsOn}
          position={[0, 2, 1]}
          intensity={0} // Start with zero intensity
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight
          ref={ambientLightRef}
          intensity={0} // Start with zero intensity
        />
      </>
    );
  };

  return (
    <Section>
      <Nav />
      <Container>
        <Left>
          <Title className='textNav insetBox'>
           Think<P>.</P><br></br>Create<P>.</P><br></br>Solve<P>.</P>
          </Title>
            <Subtitle className='textNav'>- What I Do</Subtitle>
          <Desc>I am a Full Stack Developer, Problem Solver Extrordinare, and a Student of the Craft.</Desc>
          <Button onClick={() => scrollToSection('who')} className='textBtn box'>
            Learn More
          </Button>
        </Left>
        <Right className='insetBoxWhite' >
          <PowerIcon isOn={lightsOn} onClick={toggleLights}/> 
          <Canvas shadows>
            <LightsOn />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <ResponsiveSphere />
            <GroundPlane />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

