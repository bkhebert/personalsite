/* ===== CORE IMPORTS ===== */
// React's fundamental building blocks
import React, { useState, useRef } from "react"; 
// GUI controls for tweaking values in real-time
import { useControls } from 'leva';
// Three.js helpers for textures and primitives
import { useTexture, Plane, useCubeTexture } from '@react-three/drei';
// Three.js core library
import * as THREE from 'three';

/* ===== TEXTURE IMPORTS - THE VISUAL PALETTE ===== */
// Rock surface textures (PBR material maps)
import textARM from "../assets/cubeTextures/Test2/aerial_rocks_02_arm_1k.jpg"; // Ambient occlusion + roughness + metallic
import textDIFF from "../assets/cubeTextures/Test2/aerial_rocks_02_diff_1k.jpg" // Base color
import textDISP from "../assets/cubeTextures/Test2/aerial_rocks_02_disp_1k.jpg" // Height displacement
import textNOR from "../assets/cubeTextures/Test2/aerial_rocks_02_nor_gl_1k.jpg" // Surface normals

// Cube map textures (6 faces for environment mapping)
import diffnx from '../assets/cubeTextures/Test3/experimental/diff/diffnx.png'; // Negative X
import diffny from '../assets/cubeTextures/Test3/experimental/diff/diffny.png'; // Negative Y
import diffnz from '../assets/cubeTextures/Test3/experimental/diff/diffnz.png'; // Negative Z
import diffpy from '../assets/cubeTextures/Test3/experimental/diff/diffpy.png'; // Positive Y
import diffpx from '../assets/cubeTextures/Test3/experimental/diff/diffpx.png'; // Positive X
import diffpz from '../assets/cubeTextures/Test3/experimental/diff/diffpz.png'; // Positive Z

const Textures = () => {
  /* ===== CONTROL PANELS - THE MASTER KNOBS ===== */
  // Sphere controls panel (appears in Leva GUI)
  const { 
    value1,  // Sphere radius
    value2,  // Width segments
    value3,  // Height segments
    value4,  // Depth segments
    sphereDisplacement, // Height map intensity
    aoSphereIntensity   // Ambient occlusion strength
  } = useControls("SphereTextures", {
    value1: 2, // Default radius
    value2: 60, // Default width segments
    value3: 60, // Default height segments
    value4: 60, // Default depth segments
    sphereDisplacement: { // Displacement control
      value: 1,  // Default
      min: -2,   // Minimum value
      max: 2     // Maximum value
    },
    aoSphereIntensity: { // Ambient occlusion control
      value: 1,  // Default
      min: 0,    // Minimum
      max: 10,   // Maximum
    }
  })

  // Plane controls panel (separate section in GUI)
  const { 
    planeDisplacementScale, // Terrain height intensity
    aoPlaneIntensity       // Plane shadow details
  } = useControls("PlaneTextures", {
    planeDisplacementScale: { // Terrain exaggeration
      value: 1,  // Default
      min: -2,   // Can invert displacement
      max: 2     // Maximum height
    },
    aoPlaneIntensity: { // Shadow darkness
      value: 1,  // Default
      min: 0,    // No shadows
      max: 10,   // Very dark shadows
    }
  })

  /* ===== TEXTURE LOADING - MATERIAL ALCHAMY ===== */
  // Load all PBR textures for the rocky material
  const terrainTextures = useTexture({
    map: textDIFF,         // Base color
    displacementMap: textDISP, // Height map
    aoMap: textARM,        // Ambient occlusion
    roughnessMap: textARM,  // Surface roughness
    metalnessMap: textARM,  // Metallic reflection
    normalMap: textNOR      // Surface bumps
  });

  // Cube map configuration for environment reflection
  const diffTexture = useCubeTexture( 
    [ // Ordered as +X, -X, +Y, -Y, +Z, -Z
      diffpx, diffnx, 
      diffpy, diffny, 
      diffpz, diffnz
    ], 
    { path: "" } // Path prefix (none since we imported directly)
  );

  /* ===== SCENE COMPOSITION - THE STAGE ===== */
  return (
    <>
      {/* GROUND PLANE - THE FOUNDATION */}
      <Plane 
        args={[10, 10, 128, 128]} // Width, height, widthSegments, heightSegments
        position={[0, -4, 0]}     // Centered, lowered on Y axis
        rotation-x={-Math.PI / 2}  // Rotated to lay flat
      >
        {/* PBR material with all texture maps */}
        <meshStandardMaterial 
          {...terrainTextures} // Spread all loaded textures
          displacementScale={planeDisplacementScale} // Dynamic height control
          aoMapIntensity={aoPlaneIntensity}         // Dynamic shadow control
        />
      </Plane>  

      {/* REFLECTIVE SPHERE - THE MIRROR */}
      <mesh position={[6, 0, 0]}> {/* Positioned to the right */}
        <sphereGeometry args={[2, 60, 60]} /> {/* Fixed size, high detail */}
        {/* Basic material with environment reflection */}
        <meshBasicMaterial 
          envMap={diffTexture} // Cube map for reflections
        />
      </mesh>

      {/* TEXTURED SPHERE - THE SHOWPIECE */}
      <mesh position={[-6, 0, 0]}> {/* Positioned to the left */}
        <sphereGeometry 
          args={[value1, value2, value3, value4]} // Dynamic parameters
        />
        {/* Advanced PBR material with controls */}
        <meshStandardMaterial 
          {...terrainTextures} // Same rock textures as plane
          displacementScale={sphereDisplacement} // Dynamic height
          aoMapIntensity={aoSphereIntensity}    // Dynamic shadows
        />
      </mesh>
    </>
  )
}

export default Textures;