import React, { useState, useRef } from "react"; 
import { useControls } from 'leva';
import { useCubeTexture } from '@react-three/drei';
import * as THREE from 'three';

import nx from '../assets/cubeTextures/Test/nx.png';
import ny from '../assets/cubeTextures/Test/ny.png';
import nz from '../assets/cubeTextures/Test/nz.png';
import py from '../assets/cubeTextures/Test/py.png';
import px from '../assets/cubeTextures/Test/px.png';
import pz from '../assets/cubeTextures/Test/pz.png';

const Materials = () => {

  const ref = useRef();
  const size = [2, 60, 60];
  const position = [1, 0, 0]

  const cubeTexture = useCubeTexture([
    px,
    nx,
    py,
    ny,
    pz,
    nz,
  ], {path: ""});
  const { 
    color, 
    fogColor, 
    opacity, 
    reflectivity, 
    shininess, 
    specular, 
    metalness,
    roughness
  } = useControls({
    color:"yellow",
    fogColor:"red",
    opacity: 1,
    reflectivity: 1,
    shininess: 30,
    specular: "#111111",
    metalness: 0,
    roughness: 1,
  })

  
  return (
    <>
    <fog attach="fog" args={[fogColor, 1, 100]}/>
        <mesh position={position} ref={ref}>
              <sphereGeometry args={size}></sphereGeometry>
              <meshBasicMaterial 
              color={color}
              envMap={cubeTexture} 
              reflectivity={reflectivity}
              // opacity={opacity} <--- opacity setting
              // transparent <--- makes item transparent
             // depthTest={false} <-- When false, it will always be in front
             // visible={false} <-- When false, makes item invisible 
             // depthWrite={false} <-- When false, does not account whatever is closest to camera
              // alphaTest={0.35} <-- Decides when the minimum opacity should render
              // side={DoubleSide} <-- Says what side you can see... not avail on spheres
              />
      
        </mesh>
        <mesh position={[1, 2, -2]} ref={ref}>
          <torusGeometry args={[0.5, 0.1, 30, 30]}></torusGeometry>
          <meshLambertMaterial 
          color={"blue"} 
          emissive={"hotpink"} 
          />
    </mesh>
    <mesh position={[3, 2, -2]} ref={ref}>
          <torusGeometry args={[0.5, 0.1, 30, 30]}></torusGeometry>
          <meshPhongMaterial 
          color={"yellow"} 
          specular={specular} // color of shine
          emissive={"green"} 
          shininess={shininess} // how sharp the shine is
          />
    </mesh>
    <mesh position={[5, 2, -2]} ref={ref}>
          <torusGeometry args={[0.5, 0.1, 30, 30]}></torusGeometry>
          <meshStandardMaterial 
          color={"white"} 
          metalness= {metalness} // how metallic
          roughness= {roughness} // how rough it seems
          />
    </mesh>
        
    
    </>
  )
}

export default Materials;