import React from 'react';
import { useThree } from 'react-three-fiber';

function ThreeHook() {
  const {
    // gl,
    scene
    // camera,
    // raycaster,
    // size,
    // viewport,
    // aspect,
    // mouse,
    // clock,
    // invalidate,
    // intersect,
    // setDefaultCamera,
  } = useThree();



  return (
    <mesh>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="#6be092" />
    </mesh>
  );
}

export default ThreeHook;
