// src/components/ModelViewer.js
import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const GLBModel = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

export const ModelViewer = ({ glbUrl, setCaptureViewRef }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (setCaptureViewRef) {
      setCaptureViewRef.current = () => ({
        position: camera.position.toArray(), // [x, y, z]
        rotation: [camera.rotation.x, camera.rotation.y, camera.rotation.z], // exclude 'XYZ'
        quaternion: camera.quaternion.toArray(), // [x, y, z, w]
      });

      setCaptureViewRef.current.jumpToView = (view) => {
        camera.position.set(...view.position);
        camera.rotation.set(...view.rotation);
        camera.quaternion.set(...view.quaternion);
      };
    }
  }, [camera, setCaptureViewRef]);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      {glbUrl && <GLBModel url={glbUrl} />}
    </>
  );
};
