import * as THREE from "three";
import transparentstar from "../assets/transparentstar.png";
import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";

function Ripple(){

  const imgTex= useLoader(THREE.TextureLoader, transparentstar);

  const count = 100; // # of points
  const sep = 3; // distance to each point
  // [x1, y1, z1]
  let positions = useMemo(() => {
    let positions = []

    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = 0;
        positions.push(x, y, z)
      }
    }

    return new Float32Array(positions);
  }, [count, sep]);

  return(
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
         attach={'attributes-position'}
        array={positions}
        count={positions.length / 3}
        itemSize={3}
        >

        </bufferAttribute>
      </bufferGeometry>
      <pointsMaterial
      attach={"material"}
      color={0x00AFF}
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
