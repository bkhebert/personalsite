import React, { useEffect, useRef } from 'react';
import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
const App = () => {
  const ref = useRef();


  useEffect(() => {

  }, [])

    return ( 
        <div>
        <div className="p-10 bg-red-500 text-white text-2xl">
        If this text is red, Tailwind is working... frfrfr
      </div>
      <div>
      <div style={{ width: '800px', height: '600px' }}>
      <Canvas>
      <ThreeJSTest></ThreeJSTest>
      </Canvas>
      </div>
      </div>
      </div>

    )
};

export default App;