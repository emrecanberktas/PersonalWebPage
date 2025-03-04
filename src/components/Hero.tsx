import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Orbit = ({ rotation = [0, 0, 0] }) => {
  const orbitRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.x = rotation[0];
      orbitRef.current.rotation.y = rotation[1];
      orbitRef.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={orbitRef}>
      <torusGeometry args={[3, 0.1, 16, 100]} />
      <meshBasicMaterial color="#61dafb" />
    </mesh>
  );
};

const Hero = () => {
  const nucleusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (nucleusRef.current) {
      nucleusRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#61dafb" />

      {/* Nucleus */}
      <mesh ref={nucleusRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#61dafb"
          metalness={0.8}
          roughness={0.2}
          emissive="#61dafb"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbits */}
      <Orbit rotation={[Math.PI / 3, 0, 0]} />
      <Orbit rotation={[-Math.PI / 3, 0, Math.PI / 3]} />
      <Orbit rotation={[-Math.PI / 3, 0, -Math.PI / 3]} />

      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial
          color="#61dafb"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
};

export default Hero;
