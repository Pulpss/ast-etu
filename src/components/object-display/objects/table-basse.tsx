"use client";

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    defaultobject: THREE.Mesh;
  };
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial;
  };
};

export function TableBasse(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/table-basse.glb") as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      scale={0.003}
      rotation={[-Math.PI / 2, 0, Math.PI / 4]}
      position={[0, -1.5, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultobject.geometry}
        material={materials.DefaultMaterial}
      />
    </group>
  );
}

useGLTF.preload("/table-basse.glb");
