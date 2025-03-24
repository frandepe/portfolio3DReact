import { Environment, ScrollControls } from "@react-three/drei";
import { Jobs } from "./Jobs";
// @ts-ignore
import CaballoPortfolio from "../../../public/caballo/CaballoPortfolio";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";

export const Animation = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <LoadingScreen />}
      <Canvas className="canvasCaballo" onCreated={() => setIsLoading(false)}>
        <ambientLight intensity={20} />
        <ScrollControls
          pages={3}
          damping={0.25}
          // @ts-ignore
          touch={{ enabled: true, smooth: 0.5, dragOnly: true }}
        >
          <Jobs />
          {/* <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          /> */}
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
