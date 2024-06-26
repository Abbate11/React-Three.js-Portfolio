import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Icons } from './Icons'

const SocialMedia = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} shadows camera={{zoom: 1.1}}>
      <Stage enviromnet="city" intensity={0.6}>
        <Icons />
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  )
}

export default SocialMedia