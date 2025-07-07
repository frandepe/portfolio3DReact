import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, Points, BufferAttribute } from "three";
import * as THREE from "three";

const TransformingCubeToSphere: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const particlesRef = useRef<Points>(null);
  const [progress, setProgress] = useState(0);
  const [lightColor, setLightColor] = useState(new THREE.Color("yellow"));

  useEffect(() => {
    // Incrementa el progreso gradualmente en 4 segundos
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      const newProgress = Math.min(elapsed / 4000, 1);
      setProgress(newProgress);

      // Interpolación de luz
      const startLight = new THREE.Color("yellow");
      const endLight = new THREE.Color("violet");
      const interpolatedLight = startLight.clone().lerp(endLight, newProgress);
      setLightColor(interpolatedLight);

      if (elapsed < 4000) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // Bounce ligero
      const scaleFactor = 1 + 0.1 * Math.sin(progress * Math.PI * 2);
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    if (particlesRef.current) {
      // Las partículas giran con el objeto
      particlesRef.current.rotation.x += 0.005;
      particlesRef.current.rotation.y += 0.005;
    }
  });

  const morphVertices = (progress: number) => {
    const vertices = [];
    const size = 3; // Tamaño base del cubo
    const segments = 20; // Detalles de la interpolación

    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        for (let k = 0; k <= segments; k++) {
          const x = size * (i / segments - 0.5);
          const y = size * (j / segments - 0.5);
          const z = size * (k / segments - 0.5);

          // Interpolación con ruido para deformación orgánica
          const noiseFactor = Math.sin((x + y + z) * progress * 10) * 0.2;

          const sphereFactor = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
          const radius = size / 2 + noiseFactor;
          const factor = 1 - progress;

          const newX = factor * x + progress * (x / sphereFactor) * radius;
          const newY = factor * y + progress * (y / sphereFactor) * radius;
          const newZ = factor * z + progress * (z / sphereFactor) * radius;

          vertices.push(newX, newY, newZ);
        }
      }
    }

    return new Float32Array(vertices);
  };

  const createParticles = () => {
    const particleCount = 1000;
    const particles = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 6; // x
      particles[i * 3 + 1] = (Math.random() - 0.5) * 6; // y
      particles[i * 3 + 2] = (Math.random() - 0.5) * 6; // z
    }

    return new BufferAttribute(particles, 3);
  };

  const geometry = React.useMemo(() => {
    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(morphVertices(progress), 3)
    );
    return bufferGeometry;
  }, [progress]);

  const particleGeometry = React.useMemo(() => {
    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute("position", createParticles());
    return bufferGeometry;
  }, []);

  return (
    <>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color={new THREE.Color().lerpColors(
            new THREE.Color("orange"),
            new THREE.Color("yellow"),
            progress
          )}
          emissive="blue"
          emissiveIntensity={0.5 * progress}
          wireframe
        />
      </mesh>
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial size={0.05} color={lightColor} />
      </points>
    </>
  );
};

const Example3D: React.FC = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 18],
        fov: 50,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} color={new THREE.Color("red")} />
      <TransformingCubeToSphere />
    </Canvas>
  );
};

export default Example3D;
