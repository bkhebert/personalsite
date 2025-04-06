import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sphere = ({position, size, color}) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    
  })

  return (
    <mesh position={position} ref={ref}>
          <sphereGeometry args={size} ></sphereGeometry>
          <meshStandardMaterial color={color} wireframe={true}></meshStandardMaterial>
    </mesh>
  )
} 

export default Sphere;