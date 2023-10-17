"use client";

import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";

interface CubesProps {
  cubeAmount: number;
}

const Cubes = ({ cubeAmount }: CubesProps) => {
  return (
    <div className="absolute h-full w-full left-0 top-0 -z-50">
      <Canvas shadows camera={{ position: [0, 2, 7] }}>
        <ambientLight intensity={1} />

        <Physics>
          {Array.from({ length: cubeAmount }).map((_, i) => (
            <Cube key={i} />
          ))}
          <Floor />
        </Physics>
      </Canvas>
    </div>
  );
};

const Floor = (props: any) => {
  const [ref] = usePlane(() => ({
    position: [0, -5, 0],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  return (
    <mesh ref={ref} {...props} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        attach="material"
        color="#fff"
        opacity={0}
        transparent={true}
      />
    </mesh>
  );
};

const Cube = () => {
  const [ref] = useBox(() => ({
    position: [Math.random() * 10 - 5, 25, Math.random() * 10 - 10],
    rotation: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
    mass: 1,
  }));

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
};

export default Cubes;
