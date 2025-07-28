// Gustavo Corona
// src/Profile.jsx made July 27, 2025
// GitHub Repository URL: https://github.com/SugKrona/module10a-profile

import React, { useState } from 'react'; 

function Profile({ name, occupation, funFact, image }) {
  const [showDetail, setShowDetail] = useState(false); 

  const toggleDetail = () => {
    setShowDetail(!showDetail); 
  };
const cardStyle = {
    maxWidth: '500px', 
    padding: '30px',    
    border: '2px solid #ccc', 
    borderRadius: '12px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '20px auto', 
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
    color: '#333', // 
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '15px',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={`${name}'s profile`} style={imageStyle} />
      <h2 style={{ margin: '0', fontSize: '22px', color: 'black' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px', color: '#555' }}>{occupation}</p>
      <button onClick={toggleDetail} style={buttonStyle}>
        {showDetail ? 'Hide Detail' : 'Show Detail'} 
      </button>
      {showDetail && <p style={{ marginTop: '16px', fontSize: '14px', color: '#333' }}>{funFact}</p>}
    </div>
  );
}

export default Profile; 