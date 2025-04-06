import React, { useEffect } from 'react';


const Cube = ({position, size, color}) => {

  return (
    <mesh position={position}>
          <boxGeometry args={size}></boxGeometry>
          <meshStandardMaterial color={color}></meshStandardMaterial>
    </mesh>
  )
} 

export default Cube;