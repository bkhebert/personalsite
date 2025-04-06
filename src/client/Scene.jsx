import React from 'react';
import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'

const Scene = () => {


    return ( 
      <Canvas>
        <Perf />
      <ThreeJSTest></ThreeJSTest>
      </Canvas>
    )
};


export default Scene;