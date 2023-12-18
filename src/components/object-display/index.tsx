"use client";

import React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, Environment, OrbitControls } from "@react-three/drei";
import Background from "./background";

export default function ObjectDisplay({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <Canvas
      style={{ height: "100%" }}
      shadows
      gl={{ preserveDrawingBuffer: true }}
    >
      <fog attach="fog" args={["#84c7e3", 10, 30]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 20, 20]} intensity={1} />
      <directionalLight
        castShadow
        intensity={2}
        position={[10, 6, 6]}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera
          attach="shadow-camera"
          left={-20}
          right={20}
          top={20}
          bottom={-20}
        />
      </directionalLight>
      <directionalLight
        intensity={2}
        position={[-10, 6, 6]}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera
          attach="shadow-camera"
          left={-20}
          right={20}
          top={20}
          bottom={-20}
        />
      </directionalLight>

      {children}
      {/* Ground */}


      <OrbitControls
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - (Math.PI * 2) / 5}
      />
      <Environment preset="forest" background blur={0.5} />
    </Canvas>
  );
}
