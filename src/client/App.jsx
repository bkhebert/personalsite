import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import Stats from 'three/examples/jsm/libs/stats.module';
import Cube from './Cube';
import Sphere from './Sphere';
import Torus from './Torus';
import TorusKnot from './TorusKnot';

const App = () => {
  const ref = useRef();


  useEffect(() => {

  }, [])

    return ( 
        <div>
        <div className="p-10 bg-red-500 text-white text-2xl">
        If this text is red, Tailwind is working... frfr
      </div>
      <Canvas>
        <directionalLight position={[0, 0, 2]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"purple"} size={[1, 1, 1]}/>
        <Cube position={[-1, 0, 0]} color={"gold"} size={[1, 1, 1]}/>
        <Cube position={[1, 2, 0]} color={"red"} size={[1, 1, 1]}/>
        <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]}/>
        </group> */}
        <Sphere position={[0, 0, 1]} size={[1, 30, 30]} color={"yellow"}/>
        <Torus position={[2, 0, 1]} size={[0.5, 0.1, 30, 30]} color={"hotpink"}/>
        <TorusKnot position={[-2, 0, 1]} size={[0.5, 0.1, 1000, 50]} color={"blue"}/>
        {/* <Cube position={[0, 0, 1]} color={"blue"} size={[1, 1, 1]}/> */}
      </Canvas>
      </div>
    )
};

export default App;