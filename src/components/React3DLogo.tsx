import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const ReactLogo = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const orbit1Ref = useRef<THREE.Group>(null);
  const orbit2Ref = useRef<THREE.Group>(null);
  const orbit3Ref = useRef<THREE.Group>(null);
  const electronsRef = useRef<THREE.Mesh[]>([]);

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
      <group ref={orbit1Ref}>
        <Line
          points={createOrbit(0, 0).map((p) => [p.x, p.y, 0])}
          color={0x61dafb}
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      </group>

      <group ref={orbit2Ref}>
        <Line
          points={createOrbit(Math.PI / 3, Math.PI / 6).map((p) => [
            p.x,
            p.y,
            0,
          ])}
          color={0x61dafb}
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      </group>

      <group ref={orbit3Ref}>
        <Line
          points={createOrbit(Math.PI / 6, Math.PI / 3).map((p) => [
            p.x,
            p.y,
            0,
          ])}
          color={0x61dafb}
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      </group>

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

export default ReactLogo; // Artık React3DLogo yerine ReactLogo kullanıyoruz
