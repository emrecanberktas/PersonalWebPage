import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Ellipse = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const orbit1Ref = useRef<THREE.Group>(null);
  const orbit2Ref = useRef<THREE.Group>(null);
  const orbit3Ref = useRef<THREE.Group>(null);
  const electron1Ref = useRef<THREE.Mesh>(null);
  const electron2Ref = useRef<THREE.Mesh>(null);
  const electron3Ref = useRef<THREE.Mesh>(null);

  const ellipse1 = new THREE.EllipseCurve(
    0,
    0,
    10,
    3,
    0,
    2 * Math.PI,
    false,
    0
  );
  const ellipse2 = new THREE.EllipseCurve(
    0,
    0,
    10,
    6,
    0,
    2 * Math.PI,
    false,
    0
  );
  const ellipse3 = new THREE.EllipseCurve(
    0,
    0,
    15,
    9,
    0,
    2 * Math.PI,
    false,
    0
  );

  const point1 = ellipse1
    .getPoints(100)
    .map((p) => new THREE.Vector3(p.x, p.y, 0));

  const point2 = ellipse2
    .getPoints(100)
    .map((p) => new THREE.Vector3(p.x, p.y, 0));

  const point3 = ellipse3
    .getPoints(100)
    .map((p) => new THREE.Vector3(p.x, p.y, 0));

  return (
    <>
      <Canvas>
        <Line points={point1} color="red" lineWidth={1} />
        <Line points={point2} color="yellow" lineWidth={2} />
        <Line points={point3} color="blue" lineWidth={3} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI * 3) / 4}
        />
      </Canvas>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};

export default Ellipse;
