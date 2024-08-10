import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, PresentationControls, Environment } from "@react-three/drei";
import * as THREE from 'three';

import { styles } from "../../styles";

import CanvasLoader from "../Loader";

const MarbleCanvas = () => {
  const backgroundColor = new THREE.Color('#dbcba4');

  return (
    <Canvas shadows color={backgroundColor} camera={{ position: [0, 40, 50], fov: 30 }}>
      <axesHelper />
      <color attach="background" args={[backgroundColor]} />
      <Suspense fallback={<CanvasLoader />}>        
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
};

export default MarbleCanvas;