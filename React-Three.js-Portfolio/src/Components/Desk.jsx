/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 desk.gltf --transform 
Files: desk.gltf [52.42MB] > C:\Users\chris\Documents\3D Models\Portfolio\desk\desk-transformed.glb [6.3MB] (88%)
Author: K- (https://sketchfab.com/K-)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/interior-desk-b0370405d91046f1a60ee6128e649105
Title: Interior Desk
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Desk(props) {
  const { nodes, materials } = useGLTF('/desk-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.chair_bottom} position={[3.881, -8.537, 2.077]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.602} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.PaletteMaterial001} position={[3.881, -8.537, 2.077]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.602} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.chair_pillow} position={[3.881, -8.537, 2.077]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.602} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.chair_top} position={[3.881, -8.537, 2.077]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.602} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.PaletteMaterial002} position={[-12.253, -0.457, 13.218]} rotation={[-Math.PI, 0.842, -Math.PI]} scale={[1.519, 0.297, 1.519]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.keyboard} position={[-1.535, -0.593, 1.644]} scale={[1.563, 1.563, 4.091]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.moues} position={[-1.535, -0.593, 1.644]} scale={[1.563, 1.563, 4.091]} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.paper1} position={[-7.137, -0.216, 5.262]} scale={[1, 0.463, 1]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.leather2} position={[-7.137, -0.216, 5.262]} scale={[1, 0.463, 1]} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.Book0_material} position={[-2.612, -0.703, 13.137]} rotation={[0, 0, Math.PI / 2]} scale={[6.134, 13.959, 13.959]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.Book1_material} position={[-2.612, -0.703, 13.137]} rotation={[0, 0, Math.PI / 2]} scale={[6.134, 13.959, 13.959]} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.Book2_material} position={[-2.612, -0.703, 13.137]} rotation={[0, 0, Math.PI / 2]} scale={[6.134, 13.959, 13.959]} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.monitor_screen} position={[-11.263, 3.651, 0.235]} rotation={[0, 1.571, 0]} scale={[7.21, 4.116, 0.101]} />
      <mesh geometry={nodes.Object_43.geometry} material={materials.wood} position={[1.536, -1.93, 10.199]} scale={[0.798, 0.843, 0.524]} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.PaletteMaterial003} position={[-9.122, -11.606, -13.764]} scale={0.309} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.PaletteMaterial004} position={[-9.122, -11.606, -13.764]} scale={0.309} />
      <mesh geometry={nodes.Object_102.geometry} material={materials.huion_pen_black_3} position={[-9.36, -0.18, -6.42]} rotation={[-Math.PI / 2, 0, 0]} scale={0.18} />
      <mesh geometry={nodes.Object_105.geometry} material={materials.huion_pen_black_2} position={[-9.36, -0.586, -6.373]} scale={0.782} />
      <mesh geometry={nodes.Object_106.geometry} material={materials.huion_pen_black} position={[-9.36, -0.586, -6.373]} scale={0.782} />
      <mesh geometry={nodes.Object_108.geometry} material={materials.screen} position={[-8.225, 0.995, -12.208]} rotation={[0, 0, 0.873]} scale={2} />
    </group>
  )
}

useGLTF.preload('/desk-transformed.glb')
