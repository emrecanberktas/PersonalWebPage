import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Trail, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

interface ReactLogoProps {
  [key: string]: any;
}

interface ElectronProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  speed?: number;
  radius?: number;
}

const ReactLogo: React.FC<ReactLogoProps> = (props) => {
  return (
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={6} radius={2.5} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={7}
        radius={2.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={8}
        radius={2.5}
      />
      <Sphere args={[0.35, 64, 64]}>
        <meshBasicMaterial color="#61DAFB" toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Electron: React.FC<ElectronProps> = ({
  radius = 2.5,
  speed = 6,
  ...props
}) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });

  return (
    <group ref={ref} {...props}>
      <Trail width={5} length={6} color="#61DAFB" attenuation={(t) => t * t}>
        <mesh>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color="#61DAFB" toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
};

const Model = () => {
  return (
    <div className="w-full aspect-square max-w-[700px] mx-auto">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Float>
          <ReactLogo />
        </Float>
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
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
