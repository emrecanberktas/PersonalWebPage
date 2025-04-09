// import { useState, useRef } from "react";
// import toast from "react-hot-toast";
// import { useFrame } from "@react-three/fiber";
// import { SpotLight, Text } from "@react-three/drei";
// import { Mesh } from "three";
// import * as THREE from "three";

// interface Wall {
//   position: [number, number, number];
//   box: THREE.Box3;
// }

// interface PlayerProps {
//   position: [number, number, number];
//   walls: Wall[];
// }

// function Player({ position, walls }: PlayerProps) {
//   const playerRef = useRef<Mesh>(null);
//   const [pos, setPos] = useState<[number, number, number]>(position);

//   useFrame(() => {
//     const speed = 0.1;
//     const newPos: [number, number, number] = [...pos];
//     const keys = {
//       w: false,
//       a: false,
//       s: false,
//       d: false,
//     };

//     document.onkeydown = (e: KeyboardEvent) => {
//       if (e.key === "w") keys.w = true;
//       if (e.key === "a") keys.a = true;
//       if (e.key === "s") keys.s = true;
//       if (e.key === "d") keys.d = true;
//     };
//     document.onkeyup = (e: KeyboardEvent) => {
//       if (e.key === "w") keys.w = false;
//       if (e.key === "a") keys.a = false;
//       if (e.key === "s") keys.s = false;
//       if (e.key === "d") keys.d = false;
//     };

//     if (keys.w) {
//       newPos[2] -= speed;
//     }
//     if (keys.s) {
//       newPos[2] += speed;
//     }
//     if (keys.a) {
//       newPos[0] -= speed;
//     }
//     if (keys.d) {
//       newPos[0] += speed;
//     }

//     const playerBox = new THREE.Box3().setFromCenterAndSize(
//       new THREE.Vector3(...newPos),
//       new THREE.Vector3(0.5, 0.5, 0.5)
//     );
//     const collision = walls.some((wall: Wall) => {
//       return playerBox.intersectsBox(wall.box);
//     });
//     if (!collision) setPos(newPos);
//   });

//   return (
//     <>
//       <mesh ref={playerRef} position={pos}>
//         <sphereGeometry args={[0.2, 32, 32]} />
//         <meshStandardMaterial color="purple" />
//       </mesh>
//       <SpotLight
//         position={[pos[0], pos[1] + 2, pos[2]]}
//         angle={0.5}
//         penumbra={1}
//         intensity={1}
//         distance={5}
//         target={playerRef.current!}
//       />
//     </>
//   );
// }

// interface SkillObjectProps {
//   position: [number, number, number];
//   name: string;
//   onCollect: (arg0: string) => void;
//   playerPos: [number, number, number];
// }

// function SkillObject({
//   position,
//   name,
//   onCollect,
//   playerPos,
// }: SkillObjectProps) {
//   const meshRef = useRef<Mesh>(null);
//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.01;
//       const distance = new THREE.Vector3(...playerPos).distanceTo(
//         new THREE.Vector3(...position)
//       );
//       if (distance < 1) onCollect(name);
//     }
//   });

//   return (
//     <mesh ref={meshRef} position={position} onClick={onCollect}>
//       <sphereGeometry args={[0.5, 32, 32]} />
//       <meshStandardMaterial
//         color="blue"
//         emissive="cyan"
//         emissiveIntensity={0.5}
//       />
//       <Text position={[0, 1, 0]} fontSize={0.3} color="white">
//         {name}
//       </Text>
//     </mesh>
//   );
// }

// interface WallProps {
//   position: [number, number, number];
// }

// function Wall({ position }: WallProps) {
//   return (
//     <mesh position={position}>
//       <boxGeometry args={[1, 2, 1]} />
//       <meshStandardMaterial color="black" />
//     </mesh>
//   );
// }

// function GameScene() {
//   const [collected, setCollected] = useState<string[]>([]);
//   const [playerPos, setPlayerPos] = useState<[number, number, number]>([
//     0, 0, 0,
//   ]);
//   interface Skill {
//     name: string;
//     icon: string;
//     position: [number, number, number];
//   }

//   const skills: Skill[] = [
//     { name: "HTML/CSS", icon: "🎨", position: [2, 0, 0] },
//     { name: "Tailwind CSS", icon: "🌊", position: [-2, 0, 0] },
//     { name: "JavaScript", icon: "📜", position: [0, 2, 0] },
//     { name: "TypeScript", icon: "📘", position: [0, -2, 0] },
//     { name: "React", icon: "⚛️", position: [0, 0, 2] },
//     { name: "Next.js", icon: "▲", position: [0, 0, -2] },
//     { name: "Material UI", icon: "🎯", position: [4, 0, 0] },
//     { name: "Shadcn UI", icon: "🎭", position: [-4, 0, 0] },
//     { name: "Redux", icon: "🔄", position: [0, 4, 0] },
//     { name: "Zustand", icon: "🐻", position: [0, -4, 0] },
//     { name: "React Query", icon: "🔍", position: [0, 0, 4] },
//     { name: "Git", icon: "📦", position: [6, 0, 0] },
//     { name: "Jest", icon: "🃏", position: [-6, 0, 0] },
//     {
//       name: "Data Visualization",
//       icon: "📊",
//       position: [8, 0, 0],
//     },
//   ];

//   const walls: Wall[] = [
//     {
//       position: [1, 0, 0],
//       box: new THREE.Box3().setFromCenterAndSize(
//         new THREE.Vector3(1, 0, 0),
//         new THREE.Vector3(1, 2, 1)
//       ),
//     },
//     {
//       position: [-1, 0, 0],
//       box: new THREE.Box3().setFromCenterAndSize(
//         new THREE.Vector3(-1, 0, 0),
//         new THREE.Vector3(1, 2, 1)
//       ),
//     },
//     {
//       position: [0, 0, -1],
//       box: new THREE.Box3().setFromCenterAndSize(
//         new THREE.Vector3(0, 0, -1),
//         new THREE.Vector3(1, 2, 1)
//       ),
//     },
//   ];

//   const handleCollect = (skillName: string) => {
//     setCollected([...collected, skillName]);
//     toast.success(`${skillName} Found`);
//   };
//   return (
//     <>
//       {skills.map((skill) =>
//         !collected.includes(skill.name) ? (
//           <SkillObject
//             key={skill.name}
//             position={skill.position}
//             name={skill.name}
//             onCollect={() => handleCollect(skill.name)}
//             playerPos={playerPos}
//           />
//         ) : null
//       )}
//       {walls.map((wall, i) => (
//         <Wall key={i} position={wall.position} />
//       ))}
//       <ambientLight intensity={0.1} />
//     </>
//   );
// }

// export default GameScene;
