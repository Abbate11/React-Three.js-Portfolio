import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Develop } from './Develop'

const Development = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} shadows  camera={{ position: [0, 0, 5], zoom: 1.1 }}>
      <Stage enviromnet="city" intensity={0.6}>
        <Develop />
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  )
}

export default Development