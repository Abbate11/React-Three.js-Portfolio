import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Data } from './Data'
import styled from 'styled-components'

const Desc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: greenyellow;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: #dfdfdf;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 15px;
    width: 320px;
    height: 50px;
    top: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const DataManagement = () => {
  return (
    <>
      <Canvas style={{ width: '100%', height: '100%' }} shadows camera={{ zoom: .6 }}>
        <Stage enviromnet="city" intensity={0.6}>
          <Data />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
      <Desc className='textNav box'>
      Designing and implementing robust data storage, retrieval, and analysis systems to ensure data integrity and accessibility.
      </Desc>
    </>
  )
}

export default DataManagement