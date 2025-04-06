import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Sphere = ({position, size, color}) => {
  const ref = useRef();
  const [isHovered, setIsHovered ] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 3 : 0.2
    // ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * speed;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    
  })

  return (
    <mesh 
    position={position} 
    ref={ref} 
    onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
    onPointerLeave={() => setIsHovered(false) }
    onClick={() => setIsClicked(!isClicked)}
    scale={isClicked ? 1.5: 1 }
    >
          <sphereGeometry args={size} ></sphereGeometry>
          <meshStandardMaterial color={isHovered ? "red" : color} wireframe={true}></meshStandardMaterial>
    </mesh>
  )
} 

export default Sphere;