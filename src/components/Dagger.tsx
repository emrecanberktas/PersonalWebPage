import React, { useRef } from "react";
import { useGLTF, useTexture, OrbitControls, Grid } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

interface DaggerProps {
  scale?: number;
}

type GLTFResult = {
  nodes: {
    polySurface13_MatSword_0: THREE.Mesh;
  };
};

function DaggerModel(props: DaggerProps) {
  const gltf = useGLTF("/scene.gltf");
  const { nodes } = gltf as unknown as GLTFResult;
  const daggerGroupRef = useRef<THREE.Group>(null);

  const textures = useTexture({
    map: "/textures/MatSword_baseColor.jpeg",
    normalMap: "/textures/MatSword_normal.png",
    metalnessMap: "/textures/MatSword_metallicRoughness.png",
    emissiveMap: "/textures/MatSword_emissive.jpeg",
  });

  return (
    <group
      ref={daggerGroupRef}
      dispose={null}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        geometry={nodes.polySurface13_MatSword_0.geometry}
        scale={props.scale ?? 0.01}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          {...textures}
          metalness={1}
          roughness={0.5}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

export function Dagger(props: DaggerProps) {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas
        shadows
        camera={{ position: [2, 2, 2], fov: 45 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#1a1a1a"]} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.2} />

        {/* Model */}
        <DaggerModel {...props} />

        {/* Helpers */}
        <Grid infiniteGrid />
        <OrbitControls makeDefault />

        {/* Ground for shadows */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/scene.gltf");
