import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

const ReactLogo = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const electronsRef = useRef<THREE.Mesh[]>([]);

  // Create elliptical orbit points
  const createOrbit = (rotation: number) => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * 2 * Math.PI;
      const x = 3 * Math.cos(angle);
      const y = 3 * Math.sin(angle);
      points.push(new THREE.Vector3(x, y, 0));
    }
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationZ(rotation);
    return points.map((point) => point.applyMatrix4(rotationMatrix));
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate core
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
    }

    // Move electrons
    electronsRef.current.forEach((electron, i) => {
      if (electron) {
        const angle = t * 1.5 + (i * 2 * Math.PI) / 3;
        const rotation = (i * 2 * Math.PI) / 3;
        electron.position.x = 3 * Math.cos(angle) * Math.cos(rotation);
        electron.position.y = 3 * Math.cos(angle) * Math.sin(rotation);
        electron.position.z = 3 * Math.sin(angle);
      }
    });
  });

  return (
    <>
      {/* Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color="#61DAFB"
          emissive="#61DAFB"
          emissiveIntensity={0.3}
          shininess={80}
        />
      </mesh>

      {/* Orbits */}
      {[0, Math.PI / 3, -Math.PI / 3].map((rotation, i) => (
        <Line
          key={i}
          points={createOrbit(rotation)}
          color="#61DAFB"
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}

      {/* Electrons */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) electronsRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshPhongMaterial
            color="#61DAFB"
            emissive="#61DAFB"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </>
  );
};

const Model = () => {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ReactLogo />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
        />
      </Canvas>
    </div>
  );
};

export default Model;
