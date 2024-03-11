import React from "react";
import './App.css';

function Scene() {
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="#6be092" />
    </mesh>
  );
}

export default Scene; 