import React, { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import Stats from 'three/examples/jsm/libs/stats.module';
import Cube from './Cube';

const App = () => {

  useEffect(() => {

  }, [])

    return ( 
        <div>
        <div className="p-10 bg-red-500 text-white text-2xl">
        If this text is red, Tailwind is working... frfr
      </div>
      <Canvas>
        <directionalLight position={[0, 0, 2]} intensity={0.5}/>
        <ambientLight intensity={0.2}/>
        <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"purple"} size={[1, 1, 1]}/>
        <Cube position={[-1, 0, 0]} color={"gold"} size={[1, 1, 1]}/>
        <Cube position={[1, 2, 0]} color={"red"} size={[1, 1, 1]}/>
        <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]}/>
        </group>
      </Canvas>
      </div>
    )
};

export default App;