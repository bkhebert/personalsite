import React, { useState, useRef } from "react"; 
import { useControls } from 'leva';
import { MeshTransmissionMaterial } from '@react-three/drei';

const Materials = () => {
  const ref = useRef();
  const size = [2, 60, 60];
  const position = [1, 0, 0]

  const { color, fogColor, opacity } = useControls({
    color:"yellow",
    fogColor:"red",
    opacity: 1,
  })

  return (
    <>
    <fog attach="fog" args={[fogColor, 2, 10]}/>
        <mesh position={position} ref={ref}>
              <sphereGeometry args={size}></sphereGeometry>
              <meshBasicMaterial 
              color={color} 
              opacity={opacity} 
              transparent
             // depthTest={false} <-- When false, it will always be in front
             // visible={false} <-- When false, makes item invisible 
             // depthWrite={false} <-- When false, does not account whatever is closest to camera
              // alphaTest={0.35} <-- Decides when the minimum opacity should render
              />
      
        </mesh>
    
    </>
  )
}

export default Materials;