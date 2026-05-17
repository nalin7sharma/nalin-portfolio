"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NeuralSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const positions = useMemo(() => {
    const count = 900;
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const theta = Math.acos(2 * ((i + 0.5) / count) - 1);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      const radius = 1.65 + Math.sin(i * 0.07) * 0.06;
      data[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      data[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      data[i * 3 + 2] = radius * Math.cos(theta);
    }
    return data;
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = elapsed * 0.13;
      pointsRef.current.rotation.x = Math.sin(elapsed * 0.35) * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.5 + Math.sin(elapsed * 0.2) * 0.1;
      ringRef.current.rotation.z = elapsed * 0.18;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.018}
          color="#67e8f9"
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.9, 0.006, 8, 140]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.55} />
      </mesh>
    </>
  );
}

export function ParticleSphere() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.8} />
        <NeuralSphere />
      </Canvas>
    </div>
  );
}
