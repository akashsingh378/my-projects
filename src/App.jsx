//* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./style.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cyl from "./Cyl.jsx";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {
  
  return (
    <>
    <Canvas camera={{fov:35}}>
      <OrbitControls />
    <Cyl />
    <EffectComposer>
    <Bloom
    intensity={12.0} // The bloom intensity.
    
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
  />
  <ToneMapping adaptive />
</EffectComposer>
    </Canvas>
    <div className=' w-full bg-black py-32'>
      <h1 className=' absolute top-1/4 left-1/2 font-[CooperLtBTWXX-Light]  -translate-x-1/2 -translate-y-1/2 text-3xl text-white'>Welcome to my portfolio.</h1>
      <h1 className=' absolute top-1/3 left-1/2 font-[CooperLtBTWXX-Light] -translate-x-1/2 -translate-y-1/2 text-3xl text-white'>Akash</h1>
    </div>
    </>
  )
}

export default App
