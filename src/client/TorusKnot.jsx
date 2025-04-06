import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

const TorusKnot = ({position, size, color}) => {
  const ref = useRef();

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta;
    // ref.current.rotation.y += delta * 2.0;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    
  })

  return (
    <mesh position={position} ref={ref}>
          <torusKnotGeometry args={size}></torusKnotGeometry>
          <MeshWobbleMaterial factor={5} speed={4}></MeshWobbleMaterial>
    </mesh>

 

  )
} 

export default TorusKnot;