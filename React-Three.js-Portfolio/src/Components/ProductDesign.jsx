import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Shoe } from './Shoe'

const ProductDesign = () => {
  return (
    <Canvas style={{ width: '80%', height: '80%' }} shadows camera={{zoom: 1.2}}>
      <Stage enviromnet="city" intensity={0.6}>
        <Shoe />
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  )
}

export default ProductDesign