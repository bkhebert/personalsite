import * as THREE from "three";
import transparentstar from "../assets/transparentstar.png";
import React, { useMemo, useCallback, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";

function Ripple(){
  const pointsRef = useRef(); // Reference to the points object for rotation
  const bufferRef = useRef();  // Reference to the buffer attribute
  const imgTex= useLoader(THREE.TextureLoader, transparentstar); // Load image with THREEJS

  // Used for equation to make a ripple
  let phaseShift = 0; // Rotates the wave pattern around the origin.
  let frequency = 0.02; // Controls how tightly packed the waves are (higher frequency → more ripples).
  let amplitude = 3; // Controls the wave height.
  const rotationSpeed = 0.5; // Adjust rotation speed here

  const graph = useCallback((x, z) => {
            // this equation can be demonstrated in https://grapher.mathpix.com/
            // Radial Sine Wave (x² + z²) gets squared distance from the origin (0, 0) (like a circle/sphere equation)
            // sin(frequency * (x² + z² + phaseShift)) creates "concentric wave" patterns (like ripples in water).
            // "concentric wave"= like ripples in water)
            return Math.sin( frequency * (x ** 2 + z ** 2 + phaseShift )) * amplitude;
  }, [frequency, amplitude, phaseShift]);


  const count = 100; // # of points
  const sep = 1; // distance to each point

  // [x1, y1, z1]
  let positions = useMemo(() => {
    let positions = []

    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z)
      }
    }

    return new Float32Array(positions);
  }, [count, sep]);

  
  useFrame((state) => {
    phaseShift += 1;
    const positions = bufferRef.current.array;
    const time = state.clock.getElapsedTime() * 2;

    let i = 0
    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i + 1] = graph(x, z);
        i += 3
      }
    }
    bufferRef.current.needsUpdate = true;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * rotationSpeed;
    }
  })

  return(
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
        ref={bufferRef}
        attach={'attributes-position'}
        array={positions}
        count={positions.length / 3}
        itemSize={3}
        >

        </bufferAttribute>
      </bufferGeometry>
      <pointsMaterial
      attach={"material"}
      color={"white"}
      map={imgTex}
      size={0.5}
      transparent={false}
      alphaTest={0.5}
      opacity={1.0}
      >

      </pointsMaterial>
    </points>
  )
}

export default Ripple;
