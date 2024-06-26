import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Desk from './Desk'

const WebDesign = () => {
  return (
    <Canvas style={{ width: '80%', height: '80%' }} shadows>
      <Stage enviromnet="city" intensity={0.6}>
        <Desk />
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  )
}

export default WebDesign