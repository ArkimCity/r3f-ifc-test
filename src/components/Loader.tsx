import { useEffect, useRef } from "react";
import { Group } from "three";
import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { IFCLoader } from "three/examples/jsm/loaders/IFCLoader";

interface GLTFLoaderComponentProps {
  url: string;
}


// FIXME: IFCLoaderComponent not working
export function IFCLoaderComponent({ url }) {
  const ifcLoader = new IFCLoader();
  const modelRef = useRef<Group>();

  useEffect(() => {
    // Set up IFC loader and load the file
    ifcLoader.ifcManager.setWasmPath("https://unpkg.com/web-ifc@0.0.27/wasm/");
    ifcLoader.load(url, (ifcModel) => {
      if (modelRef.current) {
        modelRef.current.add(ifcModel);
      }
    });

    return () => {
      // Clean up the loader and scene
      ifcLoader.ifcManager.dispose();
    };
  }, [url, ifcLoader]);

  return <group ref={modelRef} />;
}

export const GLTFLoaderComponent: React.FC<GLTFLoaderComponentProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // 예를 들어, 애니메이션 또는 지속적인 변형을 적용할 수 있습니다.
      // ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={gltf.scene} ref={ref} />;
};
