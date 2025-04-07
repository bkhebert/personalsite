import React, { Suspense } from 'react';
import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'

const Scene = () => {


    return ( 
      <Suspense fallback={<div>Loading Scene...</div>}>
      <Canvas>
        <Perf />
      <ThreeJSTest></ThreeJSTest>
      </Canvas>
      </Suspense>
    )
};


export default Scene;