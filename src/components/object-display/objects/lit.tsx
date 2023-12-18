"use client";

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    grand_cote_001: THREE.Mesh;
    tete_001: THREE.Mesh;
    tete_002: THREE.Mesh;
    bureau_001: THREE.Mesh;
    pied_bureau_001: THREE.Mesh;
    cote_droit_001: THREE.Mesh;
    support_rail_001: THREE.Mesh;
    separation_tiroir_001: THREE.Mesh;
    support_rail_002: THREE.Mesh;
    coin_002: THREE.Mesh;
    assemblage_tiroir_001: THREE.Mesh;
    coin_003: THREE.Mesh;
    coin_001: THREE.Mesh;
    sommier_001: THREE.Mesh;
    matelas_001: THREE.Mesh;
    pied_lit_001: THREE.Mesh;
    pied_lit_002: THREE.Mesh;
    pied_bureau_002: THREE.Mesh;
  };
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial;
  };
};

export function Lit(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/lit.glb") as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      scale={0.003}
      rotation={[-Math.PI / 2, 0, (3 * Math.PI) / 4]}
      position={[2, -1.5, -1]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grand_cote_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tete_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tete_002.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bureau_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pied_bureau_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cote_droit_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_rail_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.separation_tiroir_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_rail_002.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coin_002.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.assemblage_tiroir_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coin_003.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coin_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sommier_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.matelas_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pied_lit_001.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pied_lit_002.geometry}
        material={materials.DefaultMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pied_bureau_002.geometry}
        material={materials.DefaultMaterial}
      />
    </group>
  );
}

useGLTF.preload("/lit.glb");
