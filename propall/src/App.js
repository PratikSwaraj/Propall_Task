import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ModelViewer } from './components/ModelViewer';
import ViewPanel from './components/ViewPanel';
import axios from 'axios';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [glbUrl, setGlbUrl] = useState(null);
  const [views, setViews] = useState([]);
  const captureViewRef = useRef(null); 

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setGlbUrl(blobUrl);
    }
  };

  const handleSetView = () => {
    if (captureViewRef.current) {
      const view = captureViewRef.current(); // get camera view
      setViews((prev) => [...prev, view]);
      console.log('Captured view:', view);
    }
  };

  const handleJumpToView = (view) => {
    if (captureViewRef.current?.jumpToView) {
      captureViewRef.current.jumpToView(view);
    }
  };

  const saveToMongo = async () => {
    try {
      await axios.post(`${apiUrl}/views`, { views });
      alert('Views saved to MongoDB');
    } catch (error) {
      alert('Error saving views: ' + error.message);
    }
  };

  const loadFromMongo = async () => {
    try {
      const res = await axios.get(`${apiUrl}/views`);
      setViews(res.data.views);
      alert('Views loaded from MongoDB');
    } catch (error) {
      alert('Error loading views: ' + error.message);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>

      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        GLB Model Viewer
      </h1>
      <h2>
        Upload a GLB file
      </h2>

      <input
        type="file"
        accept=".glb"
        onChange={handleUpload}
      />
      <button
        onClick={handleSetView}
      >
        Set View
      </button>
      <ViewPanel
        views={views}
        onJumpToView={handleJumpToView}
        onSaveViews={saveToMongo}
        onLoadViews={loadFromMongo}
      />
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ModelViewer
          glbUrl={glbUrl}
          setCaptureViewRef={captureViewRef}
        />
      </Canvas>
    </div>
  );
}

export default App;
