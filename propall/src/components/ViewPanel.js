// src/components/ViewPanel.js
import React from 'react';

const ViewPanel = ({ views, onJumpToView, onSaveViews, onLoadViews }) => {
  return (
    <div style={{ position: 'absolute', right: 30, top: 100, background: '#fff', padding: 10, zIndex: 10, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <h4>Saved Views</h4>
      {/* Display views with a clickable button for each one */}
      {views.length > 0 ? (
        views.map((view, idx) => (
          <button
            key={idx}
            onClick={() => onJumpToView(view)}
            style={{
              display: 'block',
              margin: '5px 0',
              padding: '8px 12px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ddd'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          >
            View {idx + 1}
          </button>
        ))
      ) : (
        <p>No views saved</p>
      )}
      <hr />
      {/* Save and load buttons only shown if there are views */}
      {views.length > 0 && (
        <>
          <button 
            onClick={onSaveViews}
            style={{
              display: 'block',
              width: '100%',
              marginTop: '10px',
              padding: '8px 12px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Save to DB
          </button>
          <button 
            onClick={onLoadViews}
            style={{
              display: 'block',
              width: '100%',
              marginTop: '10px',
              padding: '8px 12px',
              backgroundColor: '#2196F3',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0b7dda'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
          >
            Load from DB
          </button>
        </>
      )}
    </div>
  );
};

export default ViewPanel;
