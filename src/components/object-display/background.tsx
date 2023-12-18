import * as THREE from "three";
import React, { useRef } from 'react'
import { Depth, LayerMaterial, Noise } from "lamina";

const Background = () => {
    const ref = useRef<THREE.Mesh>(null!);
  
    return (
      <mesh scale={100} ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Depth
            colorA="#8eb768"
            colorB="#dfe4d9"
            alpha={1}
            mode="normal"
            near={130}
            far={200}
            origin={[100, 100, -100]}
          />
          <Noise
            mapping="local"
            type="white"
            scale={100}
            colorA="white"
            colorB="black"
            mode="subtract"
            alpha={0.42}
          />
        </LayerMaterial>
      </mesh>
    );
}

export default Background