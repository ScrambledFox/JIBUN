"use client";
import { Canvas, useThree } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";

import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Workspace = () => {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [5, 2.5, 5], fov: 30 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene = () => {
  return (
    <>
      {/* <OrthographicCamera makeDefault manual /> */}

      <ambientLight intensity={1} />
      <pointLight position={[0, 2, 0]} color={"white"} scale={10} />
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color="#f3f3f3" />

      <Room />
    </>
  );
};

const Room = ({ ...props }) => {
  const group = useRef();
  const scene = useLoader(GLTFLoader, "/models/Room.glb");

  return (
    <group {...props}>
      <primitive ref={group} object={scene.scene} />
    </group>
  );
};

export default Workspace;
