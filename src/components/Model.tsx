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
  radiusX?: number;
  radiusY?: number;
  phase?: number;
  color?: [number, number, number];
}

const ReactLogo: React.FC<ReactLogoProps> = (props) => {
  return (
    <group {...props}>
      <Electron
        position={[0, 0, 0.5]}
        speed={6}
        radiusX={3.2}
        radiusY={1.8}
        phase={0}
        rotation={[Math.PI, Math.PI, 0]}
        color={[2, 10, 15]}
      />
      <Electron
        position={[0, 0, 0.5]}
        speed={6.5}
        radiusX={3}
        radiusY={2.1}
        phase={Math.PI / 2}
        rotation={[-Math.PI / 4, -Math.PI / 6, Math.PI / 3]}
        color={[2, 10, 15]}
      />
      <Electron
        position={[0, 0, 0.5]}
        speed={7}
        radiusX={2.8}
        radiusY={1.9}
        phase={Math.PI}
        rotation={[-Math.PI / 5, Math.PI / 7, -Math.PI / 3]}
        color={[2, 10, 15]}
      />
      <Sphere args={[0.35, 64, 64]}>
        <meshBasicMaterial color={[6, 10, 15]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Electron: React.FC<ElectronProps> = ({
  radiusX = 3,
  radiusY = 1.8,
  speed = 6,
  phase = 0,
  rotation = [0, 0, 0],
  color = [10, 8, 15],
  ...props
}) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + phase;

    const x = Math.sin(t) * radiusX;
    const y = Math.cos(t) * radiusY;

    const position = new THREE.Vector3(x, y, 0);
    position.applyEuler(new THREE.Euler(...rotation));

    ref.current.position.set(position.x, position.y, position.z);
  });

  return (
    <group ref={ref} {...props}>
      <Trail
        width={5}
        length={7}
        color={new THREE.Color(...color)}
        attenuation={(t) => t * t}
      >
        <mesh>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
};

const Model = () => {
  return (
    <div className="w-full aspect-square max-w-[700px] mx-auto">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <ReactLogo />
        </Float>
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.3} />
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
