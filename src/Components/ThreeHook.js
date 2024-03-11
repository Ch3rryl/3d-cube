import React from 'react';
import { useThree } from 'react-three-fiber';

function MyThreeComponent() {
  const {
    gl,
    scene,
    camera,
    raycaster,
    size,
    viewport,
    aspect,
    mouse,
    clock,
    invalidate,
    intersect,
    setDefaultCamera,
  } = useThree();



  return (
    <group>
      {/* Your 3D scene components go here */}
    </group>
  );
}

export default MyThreeComponent;
