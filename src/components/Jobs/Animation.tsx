import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Jobs } from "./Jobs";
// @ts-ignore
import CaballoPortfolio from "../../../public/caballo/CaballoPortfolio";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export const Animation = () => {
  return (
    <>
      <Canvas className="canvasCaballo">
        <ambientLight intensity={20} />
        <ScrollControls
          pages={3}
          damping={0.25}
          // @ts-ignore
          touch={{ enabled: true, smooth: 0.5, dragOnly: false }}
        >
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
