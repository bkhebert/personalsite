import React, { Suspense } from 'react';
import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'
import Ripple from './Ripple';


const Scene = () => {

    return ( 
      <Suspense fallback={<div>Loading</div>}> 
      <Canvas
        camera={{position: [100, 8, 0], fov: 75}}
      >
        <Perf />
        <Ripple></Ripple>
      <ThreeJSTest></ThreeJSTest>
      </Canvas>
      </Suspense>
    )
};


export default Scene;