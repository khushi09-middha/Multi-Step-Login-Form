import React from 'react';

function CustomButton({ text, width, marginTop, onClick }) {
  return (
    <button
      type="submit"
      style={{
        backgroundColor: '#EA4B8B',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px',
        marginTop: marginTop || '20px',
        width: width || 'auto', 
        cursor: 'pointer',
        outline: 'none', 
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;
