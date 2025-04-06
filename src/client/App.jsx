import React, { useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import Stats from 'three/examples/jsm/libs/stats.module';


const App = () => {

  useEffect(() => {

  }, [])

    return ( 
        <div>
        <div className="p-10 bg-red-500 text-white text-2xl">
        If this text is red, Tailwind is working... frfr
      </div>
      <Canvas>
        <directionalLight position={[0, 0, 2]}></directionalLight>
        <mesh position={[1, 0, 0]}>
          <boxGeometry ></boxGeometry>
          <meshStandardMaterial color={"purple"}></meshStandardMaterial>
        </mesh>
      </Canvas>
      </div>
    )
};

export default App;