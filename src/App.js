import React from "react";
import "./App.css";

<div className="scene-container">
  <Scene /> 
</div>

export default function Scene() {
  return (

    <mesh rotation={[0, 10, 0]}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"#6be092"} />
    </mesh>

  );


};
