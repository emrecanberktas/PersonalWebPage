import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  Text,
  MeshWobbleMaterial,
  MeshDistortMaterial,
} from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { useFrame, ThreeEvent } from "@react-three/fiber";

interface Skill {
  name: string;
  icon: string;
  color: string;
  shape: "sphere" | "octahedron" | "tetrahedron" | "torus";
}

const skills: Skill[] = [
  { name: "HTML/CSS", icon: "🎨", color: "#FF6B6B", shape: "sphere" },
  { name: "Tailwind CSS", icon: "🌊", color: "#4ECDC4", shape: "octahedron" },
  { name: "JavaScript", icon: "📜", color: "#FFE66D", shape: "tetrahedron" },
  { name: "TypeScript", icon: "📘", color: "#6C5CE7", shape: "torus" },
  { name: "React", icon: "⚛️", color: "#45B7D1", shape: "sphere" },
  { name: "Next.js", icon: "▲", color: "#000000", shape: "octahedron" },
  { name: "Material UI", icon: "🎯", color: "#FF8E72", shape: "tetrahedron" },
  { name: "Shadcn UI", icon: "🎭", color: "#A8E6CF", shape: "torus" },
  { name: "Redux", icon: "🔄", color: "#7F7FD5", shape: "sphere" },
  { name: "Zustand", icon: "🐻", color: "#FFB6B9", shape: "octahedron" },
  { name: "React Query", icon: "🔍", color: "#86A8E7", shape: "tetrahedron" },
  { name: "Git", icon: "📦", color: "#D4A5A5", shape: "torus" },
  { name: "Jest", icon: "🃏", color: "#9B5DE5", shape: "sphere" },
  {
    name: "Data Visualization",
    icon: "📊",
    color: "#00F5D4",
    shape: "octahedron",
  },
];

// Invisible walls to contain the shapes
const Walls = () => {
  usePlane(() => ({ position: [0, -10, 0], rotation: [-Math.PI / 2, 0, 0] })); // bottom
  usePlane(() => ({ position: [0, 10, 0], rotation: [Math.PI / 2, 0, 0] })); // top
  usePlane(() => ({ position: [-10, 0, 0], rotation: [0, Math.PI / 2, 0] })); // left
  usePlane(() => ({ position: [10, 0, 0], rotation: [0, -Math.PI / 2, 0] })); // right
  usePlane(() => ({ position: [0, 0, -10], rotation: [0, 0, 0] })); // back
  usePlane(() => ({ position: [0, 0, 10], rotation: [0, Math.PI, 0] })); // front
  return null;
};

const SkillShape = ({
  skill,
  position,
}: {
  skill: Skill;
  position: [number, number, number];
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [velocity, setVelocity] = useState<[number, number, number]>([0, 0, 0]);

  const geometry = useMemo(() => {
    switch (skill.shape) {
      case "sphere":
        return new THREE.SphereGeometry(0.6, 32, 32);
      case "octahedron":
        return new THREE.OctahedronGeometry(0.7);
      case "tetrahedron":
        return new THREE.TetrahedronGeometry(0.8);
      case "torus":
        return new THREE.TorusGeometry(0.5, 0.2, 16, 32);
      default:
        return new THREE.SphereGeometry(0.6, 32, 32);
    }
  }, [skill.shape]);

  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    rotation: [0, 0, 0],
    allowSleep: false,
  }));

  const bind = useMemo(
    () => ({
      onPointerDown: (event: ThreeEvent<PointerEvent>) => {
        event.stopPropagation();
        setIsDragging(true);
        api.mass.set(0);
        api.velocity.set(0, 0, 0);
      },
      onPointerUp: () => {
        setIsDragging(false);
        api.mass.set(1);
        api.velocity.set(velocity[0], velocity[1], velocity[2]);
      },
      onPointerMove: (event: ThreeEvent<PointerEvent>) => {
        if (isDragging) {
          const { point } = event;
          api.position.set(point.x, point.y, point.z);
          setVelocity([
            (point.x - position[0]) * 10,
            (point.y - position[1]) * 10,
            (point.z - position[2]) * 10,
          ]);
        }
      },
    }),
    [api, isDragging, position, velocity]
  );

  useFrame((_, delta) => {
    if (!isDragging) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group>
      {/* @ts-ignore */}
      <mesh
        ref={ref}
        {...bind}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh ref={meshRef} geometry={geometry} scale={hovered ? 1.2 : 1}>
          {skill.shape === "sphere" ? (
            <MeshDistortMaterial
              color={skill.color}
              speed={2}
              distort={hovered ? 0.6 : 0.3}
              radius={1}
            />
          ) : (
            <MeshWobbleMaterial
              color={skill.color}
              factor={hovered ? 0.6 : 0.4}
              speed={2}
              roughness={0.3}
              metalness={0.8}
            />
          )}
        </mesh>
      </mesh>
      <Text
        position={[position[0], position[1] + 1, position[2]]}
        fontSize={0.2}
        color={skill.color}
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {skill.icon} {skill.name}
      </Text>
    </group>
  );
};

// Ana About Bileşeni
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        {/* Sol Taraf: Hakkımda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-cyan-200 mb-6 text-lg leading-relaxed hover:text-white transition-colors duration-300"
          >
            I'm a passionate web developer with expertise in modern web
            technologies...
          </motion.p>
          <motion.div className="space-y-4">
            <motion.p className="text-cyan-200 text-sm">
              Try interacting with the skills:
            </motion.p>
            <motion.ul className="list-disc list-inside text-cyan-200 text-sm space-y-2">
              <li>Drag and throw the shapes</li>
              <li>Watch them collide and bounce</li>
              <li>Hover to see them transform</li>
            </motion.ul>
          </motion.div>
          <a
            href="https://drive.google.com/file/d/1WDZkucfBsYT4Ho7m53alsZEUfb-x4APF/view?usp=drive_link"
            target="_blank"
            download
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl transform transition-all duration-300 hover:from-purple-500 hover:to-cyan-500 mt-6"
            >
              Download Resume
            </motion.button>
          </a>
        </motion.div>

        {/* Sağ Taraf: 3D Beceri Görselleştirme */}
        <div className="h-full w-full">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <spotLight
              position={[0, 10, 0]}
              angle={0.3}
              penumbra={1}
              intensity={1}
              castShadow
            />

            <Physics
              gravity={[0, -2, 0]}
              defaultContactMaterial={{ restitution: 0.8 }}
            >
              <Walls />
              {skills.map((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                const radius = 5;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(index * 0.5) * 3;
                const z = Math.sin(angle) * radius;
                return (
                  <SkillShape
                    key={skill.name}
                    skill={skill}
                    position={[x, y, z]}
                  />
                );
              })}
            </Physics>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default About;
