import { useContext, useEffect, useState } from "react";
import { BackgroundMouse } from "@/components/BackgroundMouse/BackgroundMouse";
import BotpressChat from "@/components/BotpressChat/BotpressChat";
import { HeroInnovative } from "@/components/HeroSection/HeroSection";
import SplineSceneBasic from "@/components/HeroSection/HeroSection2";

import { I18nContext } from "@/utils/i18nProvider";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen";

export const Home = () => {
  const [performanceResult, setPerformanceResult] = useState<
    null | "low" | "high"
  >(null);
  const context = useContext(I18nContext);

  useEffect(() => {
    let lastTime = performance.now();
    let frames = 0;
    let totalElapsed = 0;
    let rafId: number;

    const measurePerformance = (time: number) => {
      frames++;
      const delta = time - lastTime;
      totalElapsed += delta;
      lastTime = time;

      if (totalElapsed < 5000) {
        rafId = requestAnimationFrame(measurePerformance);
      } else {
        const fps = frames / (totalElapsed / 1000);
        console.log("Average FPS:", fps);

        if (fps < 30) {
          setPerformanceResult("low");
        } else {
          setPerformanceResult("high");
        }
      }
    };

    rafId = requestAnimationFrame(measurePerformance);

    return () => cancelAnimationFrame(rafId);
  }, []);

  if (performanceResult === null) {
    return <LoadingScreen />;
  }

  return (
    <BackgroundMouse>
      {performanceResult === "low" ? (
        <HeroInnovative
          badge={context?.t.translate("home.badge")}
          title1={context?.t.translate("home.title1")}
          title2={context?.t.translate("home.title2")}
        />
      ) : (
        <SplineSceneBasic />
      )}
      <BotpressChat />
    </BackgroundMouse>
  );
};
// <BackgroundMouse>
//   {isLoading && <LoadingScreen />}
//   <Canvas
//     orthographic
//     camera={{ position: [0, 0, 100], zoom: 80 }}
//     className="canvasCaballo"
//     onCreated={() => setIsLoading(false)}
//   >
//     <Suspense fallback={null}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 10]} />
//       <Scene />
//       {/* <axesHelper
//         scale={2}
//         position={[0, 0, 0]}
//         onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
//       /> */}
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         minPolarAngle={Math.PI / 2}
//         maxPolarAngle={Math.PI / 2}
//       />
//       <Rig />
//     </Suspense>
//   </Canvas>
// </BackgroundMouse>
// function Scene({ margin = 0.5 }) {
//   const { width, height } = useThree((state) => state.viewport);
//   const gradientTexture = useTexture("/imgs/fondo-humo3.jpg");
//   const desktop = "(max-width: 600px)";
//   const isDesktop = useMediaQuery(desktop);
//   const sizeText3D = isDesktop ? 1 : 1.4;
//   const textCenter = isDesktop ? 3 : -1;
//   const positionText = isDesktop ? -0.5 : 0;
//   const profundidad = isDesktop ? -2 : 0;

//   return (
//     <>
//       <Center position={[-width / 2.2 + margin, height / 2 - margin, 0]}>
//         <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
//           frontend
//           <meshStandardMaterial color="white" />
//         </Text3D>
//       </Center>
//       <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
//         <Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
//           developer
//           <meshStandardMaterial color="white" />
//         </Text3D>
//       </Center>
//       <Center rotation={[-0.5, -0.25, 0]} position={[positionText, 0, 0]}>
//         <Text3D
//           curveSegments={32}
//           bevelEnabled
//           bevelSize={0.04}
//           bevelThickness={0.1}
//           height={0.5}
//           lineHeight={0.6}
//           letterSpacing={-0.05}
//           size={sizeText3D}
//           font="/Inter_Bold.json"
//         >
//           {`Franco\nDe Paulo`}
//           <meshStandardMaterial map={gradientTexture} />
//         </Text3D>
//         <Center position={[textCenter, 0, profundidad]}>
//           <Caballo position={[0, 0, 0]} />
//           <Environment preset="park" />
//         </Center>
//       </Center>
//     </>
//   );
// }
{
  /* <iframe
        src="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/27/17/20250427173358-I63ONLCC.json"
        style={{
          width: "400px",
          height: "600px",
          border: "none",
        }}
        title="Botpress Chat"
      /> */
}
{
  /* <HyperText
        className="text-4xl font-bold text-white mt-40"
        text="Bienvenido a mi web"
      /> */
}

{
  /* <HeroInnovative /> */
}

// function Rig() {
//   const [vec] = useState(() => new THREE.Vector3());
//   const { camera, mouse } = useThree();
//   useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));

//   return (
//     <CameraShake
//       maxYaw={0.0}
//       maxPitch={0.0}
//       maxRoll={0.01}
//       yawFrequency={0.5}
//       pitchFrequency={0.5}
//       rollFrequency={0.4}
//     />
//   );
// }
