import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import Stats from 'three/examples/jsm/libs/stats.module';
import Cube from './Cube';
import Sphere from './Sphere';
import Torus from './Torus';
import TorusKnot from './TorusKnot';
import { OrbitControls, useHelper } from '@react-three/drei';
import { DirectionalLightHelper } from 'three';
import { useControls } from 'leva';


const ThreeJSTest = () => {
  const directionalLightRef = useRef()
  const {lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
      step: 0.1
    }
  })
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

    return ( 
      <>
        <directionalLight 
        position={[0, 0, 2]} 
        intensity={lightIntensity}
        ref={directionalLightRef}
        color={lightColor}
        />
        <ambientLight intensity={0.5}/>
        {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"purple"} size={[1, 1, 1]}/>
        <Cube position={[-1, 0, 0]} color={"gold"} size={[1, 1, 1]}/>
        <Cube position={[1, 2, 0]} color={"red"} size={[1, 1, 1]}/>
        <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]}/>
        </group> */}
        {/* <Sphere position={[0, 0, 1]} size={[2, 60, 60]} color={"yellow"}/> */}
        {/* <Torus position={[2, 0, 1]} size={[0.5, 0.1, 30, 30]} color={"hotpink"}/> */}
        <TorusKnot 
        position={[0, 0, 0]} size={[0.5, 0.1, 1000, 50]} color={"blue"}/> 
        {/* <Cube position={[0, 0, 1]} color={"blue"} size={[1, 1, 1]}/> */}
          <OrbitControls enableZoom={false}></OrbitControls>
          </>
    )
};

export default ThreeJSTest;