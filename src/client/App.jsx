import React, { useEffect, useRef } from 'react';
import Scene from './Scene';
const App = () => {
  const ref = useRef();


    return ( 
        <div>
        <div className="p-10 bg-red-500 text-white text-2xl">
        If this text is red, Tailwind is working... frfrfr
      </div>
      <div>
      <div style={{ width: '800px', height: '600px' }}>
      <Scene/>
      </div>
      </div>
      </div>

    )
};

export default App;