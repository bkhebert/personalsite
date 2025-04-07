import * as THREE from "three";
import transparentstar from "../assets/transparentstar.png";

function Ripple(){

  const imgTex= useLoader(THREE.TextureLoader. transparentstar);

  // [x1, y1, z1]
  let positions = useMemo(() => {
    let positions = []



    return new Float32Array(positions);
  })

  return(
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
        attachObject={['attributes', 'position']}
        array={positions}
        count={positions.length / 3}
        itemSize={3}
        >

        </bufferAttribute>
      </bufferGeometry>
      <pointsMaterial
      attach="material"
      color={0x00AFF}
      map={imgTex}
      size={0.5}
      transparent={false}
      alphaText={0.5}
      opacity={1.0}
      >

      </pointsMaterial>
    </points>
  )
}

export default Ripple;
