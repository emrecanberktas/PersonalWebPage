import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ReactLogo = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const orbit1Ref = useRef<THREE.Line>(null);
  const orbit2Ref = useRef<THREE.Line>(null);
  const orbit3Ref = useRef<THREE.Line>(null);
  const electronsRef = useRef<THREE.Mesh[]>([]);

  // Animasyon için useFrame hook'u
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.005;
    }

    // Elektronların hareketi
    electronsRef.current.forEach((electron, index) => {
      const offset = index * 2;
      electron.position.x = 3.5 * Math.cos(time + offset);
      electron.position.y = 3.5 * Math.sin(time + offset);
    });
  });

  // Eliptik orbit oluşturma fonksiyonu
  const createOrbit = (rotationX: number, rotationY: number) => {
    const curve = new THREE.EllipseCurve(
      0,
      0,
      3.5,
      3.5,
      0,
      2 * Math.PI,
      false,
      0
    );
    const points = curve.getPoints(50);
    return points;
  };

  return (
    <>
      {/* Merkezdeki çekirdek */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial
          color={0x61dafb}
          emissive={0x61dafb}
          emissiveIntensity={0.2}
          shininess={100}
        />
      </mesh>

      {/* Üç eliptik orbit */}
      <line ref={orbit1Ref}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={
              new Float32Array(createOrbit(0, 0).flatMap((p) => [p.x, p.y, 0]))
            }
            itemSize={3}
            count={51}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={0x61dafb}
          transparent
          opacity={0.8}
          linewidth={2}
        />
      </line>

      <line ref={orbit2Ref}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={
              new Float32Array(
                createOrbit(Math.PI / 3, Math.PI / 6).flatMap((p) => [
                  p.x,
                  p.y,
                  0,
                ])
              )
            }
            itemSize={3}
            count={51}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={0x61dafb}
          transparent
          opacity={0.8}
          linewidth={2}
        />
      </line>

      <line ref={orbit3Ref}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={
              new Float32Array(
                createOrbit(Math.PI / 6, Math.PI / 3).flatMap((p) => [
                  p.x,
                  p.y,
                  0,
                ])
              )
            }
            itemSize={3}
            count={51}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={0x61dafb}
          transparent
          opacity={0.8}
          linewidth={2}
        />
      </line>

      {/* Elektronlar */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} ref={(el) => (electronsRef.current[i] = el!)}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshPhongMaterial
            color={0x61dafb}
            emissive={0x61dafb}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Işıklandırma */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};

const React3DLogo = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
      <ReactLogo />
      <OrbitControls enableDamping dampingFactor={0.25} enableZoom={false} />
    </Canvas>
  );
};

export default React3DLogo;
