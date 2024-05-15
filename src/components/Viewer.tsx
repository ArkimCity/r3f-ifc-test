// Import necessary libraries
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoaderComponent, IFCLoaderComponent } from './Loader';


function Viewer() {
  const modelPath = process.env.NODE_ENV === 'production'
  ? 'assets/models/gltf/ABeautifulGame/glTF/ABeautifulGame.gltf'
  : 'r3f-ifc-test/assets/models/gltf/ABeautifulGame/glTF/ABeautifulGame.gltf';

  const ifcModelPath = process.env.NODE_ENV === 'production'
  ? 'assets/models/ifc/model.ifc'
  : 'r3f-ifc-test/assets/models/ifc/model.ifc';

  return (
    <Canvas camera={{ position: [2, 2, 2], fov: 30 }} style={{ width: '100vw', height: '100vh', backgroundColor: 'gray' }} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} />
      <GLTFLoaderComponent url={modelPath}/>
      <IFCLoaderComponent url={ifcModelPath}/>
      <OrbitControls />
    </Canvas>
  );
}

export default Viewer;
