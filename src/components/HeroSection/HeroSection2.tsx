"use client";

import { lazy, useState } from "react";
import { Suspense } from "react";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineSceneBasic = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <LoadingScreen />
          </div>
        }
      >
        <div className="w-full h-full relative">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="loader"></span>
            </div>
          )}
          <Spline
            scene="https://prod.spline.design/xd5VeaElm8WpYoix/scene.splinecode"
            //   scene="https://prod.spline.design/TsF-I49X4y9EpFlq/scene.splinecode"
            className="w-full h-full object-cover"
            style={{ clipPath: "inset(0 0 60px 0)" }}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default SplineSceneBasic;
