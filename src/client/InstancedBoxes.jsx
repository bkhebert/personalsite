import React, { useRef, useEffect } from "react";
import { OrbitControls, Instance, Instances, Text3D } from "@react-three/drei";
import Cube from "./Cube";
 import { useFrame } from '@react-three/fiber';

const InstancedBoxes = () => {
  // For multiple refs, we use an array, if we try to use useRef, 
  // only the last box will rotate
  const allBoxRefs = useRef([]); 

  useFrame((state, delta) => {
    // Rotate each individual box's ref
    allBoxRefs.current.forEach((ref) => {
      if(ref) {
    ref.rotation.x += delta;
    ref.rotation.y += delta * 2.0;
      }
    });
  });

  useEffect(() => {
    allBoxRefs.current = allBoxRefs.current.slice(0, 50)
  }, [])

  return (
    <>
    <Instances limit={100} castShadow receiveShadow>
      {/*All within this Instances tag is the shared geometry and material*/}
          <boxGeometry/>
          <meshStandardMaterial color="yellow"></meshStandardMaterial>

      {/*
      The thing is they all need the same shape. So we create an array 
      then map out each object, there will be 50 of them 
      */}
      {Array.from({ length: 50}).map((_, i) => (
      
      // Each instance of the box geometry has a different location
        <Instance
        key={i}
        ref={(el) => ( allBoxRefs.current[i] = el)}
        // instanceRefs.current[i] = el – Storing each instance into an array
        // at the current index i.
        position={[Math.random() * 10 - 5, Math.random() * 5, Math.random() * 10 - 5]}
        scale={0.5}
        />
      
      ))}
    </Instances>
    </>
  )

}
export default InstancedBoxes;