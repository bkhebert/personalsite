import React, { useState, useRef } from "react"; 
import { useControls } from 'leva';
import { useCubeTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useLoader, useFrame } from "@react-three/fiber";


const Materials = () => {

  const ref = useRef();
  const size = [2, 60, 60];
  const position = [1, 0, 0]

  const path = 'public/Test/';
  const cubeTexture = useLoader(THREE.CubeTextureLoader, [
    '/assets/cubeTextures/Test/px.png',
    '/assets/cubeTextures/Test/nx.png',
    '/assets/cubeTextures/Test/py.png',
    '/assets/cubeTextures/Test/ny.png',
    '/assets/cubeTextures/Test/pz.png',
    '/assets/cubeTextures/Test/nz.png',
  ]);
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
              envMap={cubeTexture} 
              // opacity={opacity} <--- opacity setting
              // transparent <--- makes item transparent
             // depthTest={false} <-- When false, it will always be in front
             // visible={false} <-- When false, makes item invisible 
             // depthWrite={false} <-- When false, does not account whatever is closest to camera
              // alphaTest={0.35} <-- Decides when the minimum opacity should render
              // side={DoubleSide} <-- Says what side you can see... not avail on spheres
              />
      
        </mesh>
    
    </>
  )
}

export default Materials;