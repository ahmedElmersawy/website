"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { researchAreas } from "@/content/research";

type NodeDatum = {
  id: string;
  label: string;
  position: [number, number, number];
};

const NODE_COUNT = researchAreas.length;

// Arranged across a rightward arc (not a full circle) so nodes stay clear
// of the headline text panel on the left half of the hero.
const RIGHT_OFFSET = 2.1;
const nodes: NodeDatum[] = researchAreas.map((area, i) => {
  const t = NODE_COUNT === 1 ? 0 : i / (NODE_COUNT - 1);
  const angle = (t - 0.5) * (Math.PI * 0.82);
  const radius = 3;
  const x = Math.cos(angle) * radius + RIGHT_OFFSET;
  const z = Math.sin(angle) * radius * 0.5;
  const y = Math.sin(angle * 1.6) * 1.1;
  return { id: area.id, label: area.label, position: [x, y, z - 1] };
});

function ResearchNode({
  node,
  index,
}: {
  node: NodeDatum;
  index: number;
}) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const scale = useRef(1);

  useFrame(() => {
    const target = hovered ? 1.22 : 1;
    scale.current = THREE.MathUtils.lerp(scale.current, target, 0.12);
    if (meshRef.current) {
      meshRef.current.scale.setScalar(scale.current);
    }
  });

  return (
    <Float
      speed={1.1 + index * 0.15}
      rotationIntensity={0.25}
      floatIntensity={0.7}
      floatingRange={[-0.25, 0.25]}
    >
      <group position={node.position}>
        <mesh
          ref={meshRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/research#${node.id}`);
          }}
        >
          <icosahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial
            color={hovered ? "#d9831f" : "#b45309"}
            emissive="#b45309"
            emissiveIntensity={hovered ? 0.45 : 0.18}
            roughness={0.35}
            metalness={0.25}
          />
        </mesh>
        <Html
          position={[0, -0.62, 0]}
          center
          distanceFactor={8}
          className="pointer-events-none select-none"
          occlude={false}
        >
          <span
            className={`whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-colors ${
              hovered
                ? "border-gold bg-paper/85 text-gold-bright"
                : "border-navy-border bg-paper/70 text-muted"
            }`}
          >
            {node.label}
          </span>
        </Html>
      </group>
    </Float>
  );
}

function ConnectingLines() {
  const points = useMemo(() => {
    const center = new THREE.Vector3(0, 0, -1);
    return nodes.map((n) => [center, new THREE.Vector3(...n.position)] as const);
  }, []);

  return (
    <>
      {points.map((pair, i) => (
        <Line
          key={i}
          points={pair}
          color="#b45309"
          transparent
          opacity={0.22}
          lineWidth={1}
        />
      ))}
    </>
  );
}

function Scene() {
  const { viewport } = useThree();
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    if (group.current) {
      const targetY = pointer.current.x * 0.18;
      const targetX = pointer.current.y * -0.1;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY + state.clock.elapsedTime * 0.015,
        0.04,
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.04,
      );
    }
  });

  const scale = Math.min(1, viewport.width / 9);

  return (
    <group ref={group} scale={scale}>
      <ambientLight intensity={0.75} />
      <pointLight position={[4, 3, 4]} intensity={1} color="#d9831f" />
      <pointLight position={[-4, -2, -3]} intensity={0.35} color="#e8dec8" />
      <ConnectingLines />
      {nodes.map((n, i) => (
        <ResearchNode key={n.id} node={n} index={i} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <Scene />
    </Canvas>
  );
}
