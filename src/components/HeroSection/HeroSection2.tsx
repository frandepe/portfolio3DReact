"use client";

// import React, { useRef, useState, useCallback, useEffect } from "react";
import { lazy } from "react";
// import { motion, useSpring, useTransform } from "framer-motion";
// import { cn } from "@/lib/utils"; // Asegúrate de tener esta función para la concatenación de clases

const Spline = lazy(() => import("@splinetool/react-spline"));
import { Suspense } from "react";

const SplineSceneBasic = () => {
  return (
    <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden ">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene="https://prod.spline.design/xd5VeaElm8WpYoix/scene.splinecode"
          //   scene="https://prod.spline.design/TsF-I49X4y9EpFlq/scene.splinecode"
          className="w-full h-full object-cover"
          style={{ clipPath: "inset(0 0 60px 0)" }} // Recorta 100px de la parte inferior
        />
      </Suspense>
    </div>
  );
};
export default SplineSceneBasic;
