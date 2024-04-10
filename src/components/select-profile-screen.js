import React, { useState } from 'react';
import CustomButton from './button';
function SelectProfileScreen({ handleNext, handlePrev }) {
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState('');

  const handleChooseDefault = (defaultAvatar) => {
    setAvatar(defaultAvatar);
  };

  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className='logo-container'>
      <div className='logo'>
        <img src='https://img.icons8.com/?size=48&id=13927&format=png' alt="Logo" />
      </div>
      
    </div>
      <div className='avatar-container'>
        <div className='avatar'>
          <h2>Welcome, Let's create your profile!</h2>
          <p>Let others get to know you better! You can do these later</p>
          <br />
          <br />
          <h3><b>Add an Avatar</b></h3>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '3px dotted #7e7b7b',
                position: 'relative',
                overflow: 'hidden', 
              }}
            >
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleSelectImage}
              />
{avatar && <img src={avatar} alt="Avatar" className="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover',}} />}

              {!avatar && (
                <label
                  htmlFor="avatar-upload"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src="https://img.icons8.com/?size=32&id=21882&format=png"
                    alt="Camera Icon"
                    style={{ width: '24px', height: '24px', color:'pink' }}
                  />
                </label>
              )}
            </div>
            {!avatar && (
              <label htmlFor="avatar-upload" style={{ cursor: 'pointer', marginLeft: '30px', border: '1px solid #ccc', padding:'5px', borderRadius: '3px'}}>
                <b>Choose Image</b>
              </label>
            )}
          </div>
          <br />
          <div>
            <h3><b>Add your location</b></h3>
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
           
            <CustomButton text="Next" width="200px" onClick={handleNext} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectProfileScreen;
