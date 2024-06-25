import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber';


const Shape = () => {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2 ))
  return (
    <mesh>
          <boxGeometry />
          <meshPhongMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <color attach="background" args={['#dc9dcd']} />
              <Text ref={textRef} fontSize={2} color='#555' position={[0, 0, 0]}>
                Hello
              </Text>
            </RenderTexture>
          </meshPhongMaterial>
    </mesh>
  )
}

export default Shape