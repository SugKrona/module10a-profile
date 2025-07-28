// Gustavo Corona
// src/Profile.jsx made July 27, 2025

// GitHub Repository URL: https://github.com/SugKrona/module10a-profile

import React, { useState } from 'react'; 
function Profile({ name, occupation, funFact, image, skills }) { 
  const [showDetail, setShowDetail] = useState(false); 

  const toggleDetail = () => {
    setShowDetail(!showDetail); 
  };

  const cardStyle = {
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '20px auto',
    backgroundColor: '#f9f9f9', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333', 
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
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

  const funFactSkillsContainerStyle = {
    maxHeight: showDetail ? '500px' : '0', 
    overflow: 'hidden', 
    transition: 'max-height 0.5s ease-in-out', 
    width: '100%', 
    textAlign: 'left', 
    marginTop: '10px', 
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={`${name}'s profile`} style={imageStyle} />
      <h2 style={{ margin: '0', fontSize: '22px', color: 'black' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px', color: '#555' }}>{occupation}</p>
      
      <button onClick={toggleDetail} style={buttonStyle}>
        {showDetail ? 'Hide Detail' : 'Show Detail'} 
      </button>

      <div style={funFactSkillsContainerStyle}>
        <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>{funFact}</p>
        
        <div style={{ fontSize: '0.9rem', color: '#666' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '5px', color: 'black' }}>Skills:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {skills.map((skill, index) => (
              <li key={index} style={{ marginBottom: '4px', paddingLeft: '10px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#007bff' }}>•</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile; 