import React, { useState, useRef } from "react"; 
import { useControls } from 'leva';
import { useTexture, Plane, useCubeTexture } from '@react-three/drei';
import * as THREE from 'three';
import textARM from "../assets/cubeTextures/Test2/aerial_rocks_02_arm_1k.jpg";
import textDIFF from "../assets/cubeTextures/Test2/aerial_rocks_02_diff_1k.jpg"
import textDISP from "../assets/cubeTextures/Test2/aerial_rocks_02_disp_1k.jpg"
import textNOR from "../assets/cubeTextures/Test2/aerial_rocks_02_nor_gl_1k.jpg"
// cube map created from https://matheowis.github.io/HDRI-to-CubeMap/
import armnx from '../assets/cubeTextures/Test3/experimental/arm/armnx.png';
import armny from '../assets/cubeTextures/Test3/experimental/arm/armny.png';
import armnz from '../assets/cubeTextures/Test3/experimental/arm/armnz.png';
import armpy from '../assets/cubeTextures/Test3/experimental/arm/armpy.png';
import armpx from '../assets/cubeTextures/Test3/experimental/arm/armpx.png';
import armpz from '../assets/cubeTextures/Test3/experimental/arm/armpz.png';

import diffnx from '../assets/cubeTextures/Test3/experimental/diff/diffnx.png';
import diffny from '../assets/cubeTextures/Test3/experimental/diff/diffny.png';
import diffnz from '../assets/cubeTextures/Test3/experimental/diff/diffnz.png';
import diffpy from '../assets/cubeTextures/Test3/experimental/diff/diffpy.png';
import diffpx from '../assets/cubeTextures/Test3/experimental/diff/diffpx.png';
import diffpz from '../assets/cubeTextures/Test3/experimental/diff/diffpz.png';

import dispnx from '../assets/cubeTextures/Test3/experimental/disp/dispnx.png';
import dispny from '../assets/cubeTextures/Test3/experimental/disp/dispny.png';
import dispnz from '../assets/cubeTextures/Test3/experimental/disp/dispnz.png';
import disppy from '../assets/cubeTextures/Test3/experimental/disp/disppy.png';
import disppx from '../assets/cubeTextures/Test3/experimental/disp/disppx.png';
import disppz from '../assets/cubeTextures/Test3/experimental/disp/disppz.png';

import normalnx from '../assets/cubeTextures/Test3/experimental/normal/normalnx.png';
import normalny from '../assets/cubeTextures/Test3/experimental/normal/normalny.png';
import normalnz from '../assets/cubeTextures/Test3/experimental/normal/normalnz.png';
import normalpy from '../assets/cubeTextures/Test3/experimental/normal/normalpy.png';
import normalpx from '../assets/cubeTextures/Test3/experimental/normal/normalpx.png';
import normalpz from '../assets/cubeTextures/Test3/experimental/normal/normalpz.png';

const Textures = () => {

  const { value1, value2, value3, value4 } = useControls("SphereTextures", {
    value1: 2,
    value2: 60,
    value3: 60,
    value4: 60,
  })

  const { planeValue1, planeValue2, planeValue3, planeValue4 } = useControls("PlaneTextures", {
    planeValue1: 10,
    planeValue2: 10,
    planeValue3: 4,
    planeValue4: 4,
  })
  const terrainTextures = useTexture({
    map: textDIFF,
    displacementMap: textDISP
  });
  const size = [2, 60, 60];
  const position = [6, 0, 0]
  const normalCubeTexture = useCubeTexture( 
    [ normalpx, normalnx, normalpy, normalny, normalpz, normalnz, ], 
    {path: ""}
  );
  const armTexture = useCubeTexture( 
    [ armpx, armnx, armpy, armny, armpz, armnz, ], 
    {path: ""}
  );
  const diffTexture = useCubeTexture( 
    [ diffpx, diffnx, diffpy, diffny, diffpz, diffnz, ], 
    {path: ""}
  );
  const dispTexture = useCubeTexture( 
    [ disppx, dispnx, disppy, dispny, disppz, dispnz, ], 
    {path: ""}
  );
  

  return (

<>
<Plane args={[planeValue1, planeValue2, planeValue3, planeValue4]} position={[0,-4, 0]} rotation-x={-Math.PI / 2}>
<meshStandardMaterial {...terrainTextures} />
</Plane>
<mesh 
    position={position} 
    >
          <sphereGeometry args={size} ></sphereGeometry>
          <meshBasicMaterial envMap={diffTexture}></meshBasicMaterial>
    </mesh>

    <mesh 
    position={[-6, 0, 0]} 
    >
          <sphereGeometry args={[value1, value2, value3, value4]} ></sphereGeometry>
          <meshStandardMaterial {...terrainTextures}></meshStandardMaterial>
    </mesh>
    
</>
  )
}

export default Textures;