/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 caballo.gltf 
Author: Tenebrius (https://sketchfab.com/Tenebrius)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-piece-knight-horse-dd5c780cce3d46e4b34606e659f437e0
Title: Chess Piece: Knight (Horse)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Caballo(props) {
  const { nodes, materials } = useGLTF("/caballo/caballo.gltf");
  return (
    <group {...props} dispose={null} position={[0, 0, -5]} scale={0.9}>
      <mesh
        geometry={nodes.Horse_HorseTex_0.geometry}
        material={materials.HorseTex}
      />
    </group>
  );
}

useGLTF.preload("/caballo/caballo.gltf");