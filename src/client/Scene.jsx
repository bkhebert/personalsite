import React, { Suspense } from 'react';
import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'

import { PerspectiveCamera } from '@react-three/drei';


const Scene = () => {

    return ( 
      <Suspense fallback={<div>Loading</div>}> 
      <Canvas>
        <PerspectiveCamera
        makeDefault
        fov={75}
        position={[25, 8, 0]}
        rotation={[0, -5, 0]}
  />
        <Perf />

      <ThreeJSTest></ThreeJSTest>
      </Canvas>
      </Suspense>
    )
};


export default Scene;