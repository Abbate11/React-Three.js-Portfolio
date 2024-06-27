import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Desk from './Desk'
import styled from 'styled-components'

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: black;
  border-radius: 10px;
  position: absolute;
  top: 100px;
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

const WebDesign = () => {
  return (
    <>
      <Canvas style={{ width: '100%', height: '100%' }} shadows camera={{zoom: .65}}>
        <Stage enviromnet="city" intensity={0.6}>
          <Desk />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate/>
      </Canvas>
      <Desc className='textDesc box'>
      Creating responsive and visually appealing websites with a focus on user experience and modern design principles.
      </Desc>
    </>
  )
}

export default WebDesign