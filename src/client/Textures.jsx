import React, { useState, useRef } from "react"; 
import { useControls } from 'leva';
import { useTexture, Plane, useCubeTexture } from '@react-three/drei';
import * as THREE from 'three';
import textARM from "../assets/cubeTextures/Test2/aerial_rocks_02_arm_1k.jpg";
import textDIFF from "../assets/cubeTextures/Test2/aerial_rocks_02_diff_1k.jpg"
import textDISP from "../assets/cubeTextures/Test2/aerial_rocks_02_disp_1k.jpg"
import textNOR from "../assets/cubeTextures/Test2/aerial_rocks_02_nor_gl_1k.jpg"

import diffnx from '../assets/cubeTextures/Test3/experimental/diff/diffnx.png';
import diffny from '../assets/cubeTextures/Test3/experimental/diff/diffny.png';
import diffnz from '../assets/cubeTextures/Test3/experimental/diff/diffnz.png';
import diffpy from '../assets/cubeTextures/Test3/experimental/diff/diffpy.png';
import diffpx from '../assets/cubeTextures/Test3/experimental/diff/diffpx.png';
import diffpz from '../assets/cubeTextures/Test3/experimental/diff/diffpz.png';

const Textures = () => {

  const { value1, value2, value3, value4, sphereDisplacement, aoSphereIntensity } = useControls("SphereTextures", {
    value1: 2,
    value2: 60,
    value3: 60,
    value4: 60,
    sphereDisplacement: {
      value: 1,
      min: -2,
      max: 2
    },
    aoSphereIntensity: {
      value: 1,
      min: 0,
      max: 10,
    }
  })

  const { 
    planeValue1,
    planeValue2, 
    planeValue3, 
    planeValue4, 
    aoPlaneMapIntensity, 
    planeDisplacementScale
   } = useControls("PlaneTextures", {
    planeDisplacementScale:  {
      value: 1,
      min: -2,
      max: 2
    },
    aoPlaneIntensity: {
      value: 1,
      min: 0,
      max: 10,
    }
  })
  const terrainTextures = useTexture({
    map: textDIFF,
    displacementMap: textDISP,
    aoMap: textARM,
    roughnessMap: textARM,
    metalnessMap: textARM,
    normalMap: textNOR,
  });
  const size = [2, 60, 60];
  const position = [6, 0, 0]

  const diffTexture = useCubeTexture( 
    [ diffpx, diffnx, diffpy, diffny, diffpz, diffnz, ], 
    {path: ""}
  );

  return (

    <>
      <Plane 
      args={[10, 10, 128, 128]} 
      position={[0,-4, 0]} rotation-x={-Math.PI / 2}

      >
      <meshStandardMaterial 
      {...terrainTextures}
      displacementScale={planeDisplacementScale} 
      aoMapIntensity={aoPlaneMapIntensity}
      />
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
          <sphereGeometry 
          args={[value1, value2, value3, value4]} 
        
          >
     
          </sphereGeometry>
          <meshStandardMaterial 
          {...terrainTextures}
          displacementScale={sphereDisplacement} 
          aoMapIntensity={aoSphereIntensity}
          ></meshStandardMaterial>
    </mesh>
    
</>
  )
}

export default Textures;