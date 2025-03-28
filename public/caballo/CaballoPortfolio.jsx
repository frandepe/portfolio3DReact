/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 caballo.gltf 
Author: Tenebrius (https://sketchfab.com/Tenebrius)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-piece-knight-horse-dd5c780cce3d46e4b34606e659f437e0
Title: Chess Piece: Knight (Horse)
*/

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export const FLOOR_HEIGHT = 1.5;
export const NB_FLOORS = 3;

export default function CaballoPortfolio(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/caballo/caballo.gltf");

  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll?.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 4, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 4, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -2,
        z: 1.5,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 1,
      },
      1
    );
  }, []);

  return (
    <group ref={ref} {...props} dispose={null} scale={0.5}>
      <mesh
        geometry={nodes.Horse_HorseTex_0.geometry}
        material={materials.HorseTex}
      />
    </group>
  );
}

useGLTF.preload("/caballo/caballo.gltf");
