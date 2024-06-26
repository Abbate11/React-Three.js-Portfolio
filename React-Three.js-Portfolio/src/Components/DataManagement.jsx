import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Data } from './Data'

const DataManagement = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} shadows camera={{zoom: .7}}>
      <Stage enviromnet="city" intensity={0.6}>
        <Data />
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  )
}

export default DataManagement