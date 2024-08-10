import React, { Suspense, useEffect, useState, useRef, act } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from 'three';
import { states } from "../../constants";

import CanvasLoader from "../Loader";

const Hannya = ({ active }) => {
  const hannya = useGLTF("./hannya_full_size/scene.gltf");
  const meshRef = useRef();
  const groupRef = useRef();
  const topLightRef = useRef();
  const leftSidetLightRef = useRef();
  const rightSideLightRef = useRef();
  const hannyaState = states.filter((state) => state.title == active)[0].hannyaState;

  const cameraVector = new THREE.Vector3();
  let lerpPosX = 0;
  let lerpPosZ = -7;
  let lerpRotY = 0;
  let lerpRotX = 0;

  useFrame((state) => {
    // AUTO ROTATION
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = -Math.cos(t / 2) / 6 + Math.PI/10;
    meshRef.current.rotation.y = -Math.sin(t / 2) / 8;

    // MOUSE/MODEL MOVEMENT
    cameraVector.set(state.mouse.x * -5, state.mouse.y * -5, state.camera.position.z)
    state.camera.position.lerp(cameraVector, 0.025)
    state.camera.lookAt(0, 0, 0)

    // SET HANNYA POSITION
    lerpPosX = hannyaState.pos.x;
    lerpPosZ = hannyaState.pos.z;
    lerpRotY = hannyaState.rot.y;
    lerpRotX = hannyaState.rot.x;

    // MOVE HANNYA TO POSITION
    groupRef.current.position.x = MathUtils.lerp(groupRef.current.position.x, lerpPosX, 0.025);
    groupRef.current.position.z = MathUtils.lerp(groupRef.current.position.z, lerpPosZ, 0.025);
    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, lerpRotY, 0.025);   
    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, lerpRotX, 0.025); 

    // MOUSE/LIGHTING MOVEMENT
    const lightx = topLightRef.current.position.x + state.mouse.x * 1.25;
    const leftLighty = leftSidetLightRef.current.position.y + state.mouse.y * 0.5;
    const rightLighty = rightSideLightRef.current.position.y + state.mouse.y * 0.5;

    // FIX LIGHT POSITION 
    topLightRef.current.position.x = THREE.MathUtils.clamp(lightx, -60, 60);
    leftSidetLightRef.current.position.y = THREE.MathUtils.clamp(leftLighty, -40, 0);
    rightSideLightRef.current.position.y = THREE.MathUtils.clamp(rightLighty, -40, 0);
  })

  return (
    <group ref={groupRef}>
      <mesh 
        ref={meshRef}
        scale={0.12}
        rotation={[0, 0, 0]}
        position={[0, -2, -7]}>

        {/* OBJECT */}
        <primitive
          object={hannya.scene}          
        />

        {/* LIGHT */}
        <spotLight ref={topLightRef} position={[0, 100, 25]} intensity={2} />
        <spotLight ref={leftSidetLightRef} position={[20, -20, 4]} angle={0.15} intensity={0.5} />
        <spotLight ref={rightSideLightRef} position={[-20, -20, 4]} angle={0.15} intensity={0.5} />
      </mesh>
    </group>    
  )
};

const HannyaCanvas = ({ active }) => {
  
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 0, 50], fov: 30 }}
      >
      <Suspense fallback={<CanvasLoader />}>       
        <Hannya active={active} />
        <Environment preset="city" />          
      </Suspense>
    </Canvas>   
  )
};

export default HannyaCanvas;
