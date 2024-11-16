import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Jobs } from "./Jobs";
import CaballoPortfolio from "../../../public/caballo/CaballoPortfolio";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export const Animation = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
          <Jobs />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Suspense fallback={null}>
            <CaballoPortfolio
              position={[1, -2, -2]}
              rotation={[0, -Math.PI / 4, 0]}
            />
          </Suspense>
          <Environment preset="park" />
        </ScrollControls>
      </Canvas>
    </>
  );
};