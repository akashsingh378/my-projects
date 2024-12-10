/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
  // Define a ref for the cylinder
  const cyl = useRef();

  // Load the texture
  const tex = useTexture("./project2.jpg");

  // Animation frame update
  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta; // Rotate the cylinder on the y-axis
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={tex}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <ambientLight intensity={0.5} />
    </group>
  );
};

export default Cyl;
