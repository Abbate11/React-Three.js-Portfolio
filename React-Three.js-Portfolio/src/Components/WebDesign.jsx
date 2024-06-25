import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitalControls } from '@react-three/drei'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage enviromnet="city" intensity={0.6}>

      </Stage>
      <OrbitalControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesign