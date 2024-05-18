// Import necessary libraries
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoaderComponent, IFCLoaderComponent } from './Loader';


function Viewer() {
  const urlPrefix = process.env.NODE_ENV  === 'production' ? "" : "r3f-ifc-test/";

  const modelPath = urlPrefix + 'assets/models/gltf/ABeautifulGame/glTF/ABeautifulGame.gltf';
  const ifcModelPath = urlPrefix + 'assets/models/ifc/model.ifc';
  const wasmPath = '../../../' + urlPrefix + 'assets/'

  return (
    <Canvas camera={{ position: [2, 2, 2], fov: 30 }} style={{ width: '100vw', height: '100vh', backgroundColor: 'gray' }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} />
      <GLTFLoaderComponent url={modelPath}/>
      <IFCLoaderComponent url={ifcModelPath} wasmPath={wasmPath}/>
      <OrbitControls />
    </Canvas>
  );
}

export default Viewer;
