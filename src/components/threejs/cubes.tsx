"use client";

import React from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Box3 } from "three";

interface CubesProps {
  cubeAmount: number;
}

const Cubes = ({ cubeAmount }: CubesProps) => {
  return (
    <div className="absolute h-full w-full left-0 top-0 -z-50">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />

        <spotLight
          intensity={255}
          angle={0.5}
          position={[25, 25, 15]}
          decay={1}
          penumbra={1}
          color={"#fff"}
          castShadow
        />

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

const Cube = (props: any) => {
  const [ref] = useBox(() => ({
    position: [Math.random() * 20 - 10, 25, Math.random() * 10 - 20],
    rotation: [Math.random() * 360, Math.random() * 360, Math.random() * 360],
    mass: 1,
    ...props,
  }));

  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Cubes;
