import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import { useControls } from 'leva';

const TorusKnot = ({position, size}) => {
  const ref = useRef();

  const { color, radius } = useControls({
    color:"lightblue",
    radius:{
      value: 5,
      min: 0,
      max: 10,
      step: 0.5,
    }
  })
  useFrame((state, delta) => {
    // ref.current.rotation.x += delta;
    // ref.current.rotation.y += delta * 2.0;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    
  })

  return (
    <mesh position={position} ref={ref}>
          <torusKnotGeometry args={[radius, ...size]}></torusKnotGeometry>
          <MeshWobbleMaterial factor={5} speed={4} color={color}></MeshWobbleMaterial>
    </mesh>

 

  )
} 

export default TorusKnot;