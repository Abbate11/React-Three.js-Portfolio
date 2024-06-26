import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Icons } from './Icons'
import styled from "styled-components";

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 20px;
  background-color: black;
  border-radius: 10px;
  position: absolute;
  bottom: 300px;
  right: 100px;
  color: white;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const SocialMedia = () => {
  return (
    <>
      <Canvas style={{ width: '100%', height: '100%' }} shadows camera={{ zoom: .9 }}>
        <Stage enviromnet="city" intensity={0.6}>
          <Icons />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
      <Desc className='textDesc box'>
        Leveraging social media platforms to enhance brand presence and engagement through strategic content and analytics.
      </Desc>
    </>
  )
}

export default SocialMedia