import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Torus = ({position, size, color}) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    
  })

  return (
    <mesh position={position} ref={ref}>
          <torusGeometry args={size}></torusGeometry>
          <meshLambertMaterial color={color} emissive={"green"}></meshLambertMaterial>
    </mesh>
  )
} 

export default Torus;