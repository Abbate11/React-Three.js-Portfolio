/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 SocialMedia.gltf --transform 
Files: SocialMedia.gltf [616.67KB] > C:\Users\chris\Documents\3D Models\Portfolio\SocialMedia\SocialMedia-transformed.glb [216.02KB] (65%)
Author: wpswps (https://sketchfab.com/wpswps)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/social-media-icons-fb4f2e02221c4c3eacc963e3e2c4bb8b
Title: Social media icons
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Icons(props) {
  const { nodes, materials } = useGLTF('/SocialMedia-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Facebook_2_Facebook1_0.geometry} material={materials['Facebook.1']} position={[-1.048, 0.015, 0]} scale={0.01} />
      <mesh geometry={nodes.Instagram_2_Instagram1_0.geometry} material={materials['Instagram.1']} position={[-0.838, 0.015, 0]} scale={0.01} />
      <mesh geometry={nodes.Twitter_2_Twitter1_0.geometry} material={materials['Twitter.1']} position={[-0.625, 0.015, 0]} scale={0.01} />
      <mesh geometry={nodes.Pinterest_2_Pinterest1_0.geometry} material={materials['Pinterest.1']} position={[-0.419, 0.015, 0]} scale={0.01} />
      <mesh geometry={nodes.Tik_2_Tok1_0.geometry} material={materials['Tok.1']} position={[0, 0.015, 0]} scale={0.01} />
      <mesh geometry={nodes.Youtube_2_Youtube_0.geometry} material={materials.Youtube} position={[-1.027, 0.237, 0]} scale={0.01} />
      <mesh geometry={nodes.Twitch_2_Twitch1_0.geometry} material={materials['Twitch.1']} position={[-0.821, 0.237, 0]} scale={0.01} />
      <mesh geometry={nodes.Discord_2_Discord1_0.geometry} material={materials['Discord.1']} position={[-0.607, 0.237, 0]} scale={0.01} />
      <mesh geometry={nodes.Telegram_2_Telegram1_0.geometry} material={materials['Telegram.1']} position={[-0.394, 0.237, 0]} scale={0.01} />
      <mesh geometry={nodes.Whatsap_2_Whatsap1_0.geometry} material={materials['Whatsap.1']} position={[-0.188, 0.237, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/SocialMedia-transformed.glb')
