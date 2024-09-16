import React, {useState, useRef, useEffect } from 'react';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Nav from './Nav';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

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
  }

  @media only screen and (max-width: 768px) {
    gap: 2%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.5%;
  width: 50%;
  flex: 2;

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
  padding-right: 50px;
  margin-top: 10px;
  max-width: 700px;
  padding: 10px;
  padding-right: 80px;

  @media only screen and (max-width: 1700px) {
    font-size: 100px;
  }

  @media only screen and (max-width: 1500px) {
    font-size: 95px;
  }

  @media only screen and (max-width: 1350px) {
    font-size: 75px;
    width: 375px;
  }

  @media only screen and (max-width: 1225px) {
    font-size: 60px;
    width: 350px;
    margin-top: 10px;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 50px;
    width: 320px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
    width: 300px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 35px;
    margin: 10px;
    margin-top: 15px;
  }
`;

const P = styled.a`
  color: orange;
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
  color: orange;
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
  color: orange;
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
  width: 60%;
  height: 60%;
  display: flex;
  background-color: #0f0f0f;
  border-radius: 5%;
  margin-bottom: 5%;
  position: relative;

  @media only screen and (max-width: 2000px){
    
  }

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 60%;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: orange;
  position: absolute;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
  z-index: 20;
`

const PowerIcon = ({ onClick }) => {
  return (
    <div>
      <StyledIcon icon={faPowerOff} onClick={onClick}/>
    </div>
  )
}


const Hero = () => {
  const [lightsOn, setLightsOn] = useState(false);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
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

      if (viewport.width <= 6) {
        scale = 0.8;
      }

      if (viewport.width <= 5.5) {
        scale = 0.75;
      }

      if (viewport.width <= 5) {
        scale = 0.7;
      }

      if (viewport.width <= 4.5) {
        scale = 0.65;
      }

      if (viewport.width <= 4) {
        scale = 0.6;
      }

      if (viewport.width <= 3.5) {
        scale = 0.55;
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
            Learn<P>.</P> Create<P>.</P> Improve<P>.</P>
          </Title>
          <WhatWeDo>
            <Subtitle className='textNav'>- What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I am a full stack developer.</Desc>
          <Button onClick={() => scrollToSection('who')} className='textBtn box'>
            Learn More
          </Button>
        </Left>
        <Right className='insetBoxWhite' >
          <PowerIcon onClick={toggleLights}/> 
          <Canvas shadows>
            <LightsOn />
            <OrbitControls enableZoom={false} enablePan={false} />
            <ResponsiveSphere />
            <GroundPlane />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

