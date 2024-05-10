// Import necessary libraries
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoaderComponent } from './Loader';


function Viewer() {
  return (
    <Canvas camera={{ position: [2, 2, 2], fov: 30 }} style={{ width: '100vw', height: '100vh', backgroundColor: 'gray' }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} />
      <GLTFLoaderComponent url='assets/models/gltf/ABeautifulGame/glTF/ABeautifulGame.gltf'/>
      <OrbitControls />
    </Canvas>
  );
}

export default Viewer;
