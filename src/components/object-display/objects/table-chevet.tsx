"use client";

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["table_chevet-Body"]: THREE.Mesh;
  };
  materials: {};
};

export function TableChevet(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/table-chevet.glb") as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      scale={0.005}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["table_chevet-Body"].geometry}
        material={nodes["table_chevet-Body"].material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/table-chevet.glb");
