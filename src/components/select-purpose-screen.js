import React, { useState } from 'react';
import CustomButton from './button';
function SelectPurposeScreen({ purpose, setPurpose, handleNext, handlePrev }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isNextEnabled = selectedOptions.length > 0;

  return (
    <div>
      <div className='logo-container'>
        <div className='logo'>
          <img src='https://img.icons8.com/?size=48&id=13927&format=png' alt="Logo" />
        </div>
        <button className='back-button' onClick={handlePrev}>
          <img src='https://img.icons8.com/?size=24&id=85304&format=png' alt="Back Arrow" />
        </button>
      </div>
      <div className="purpose-container">
        <form onSubmit={handleNext} className="form">
          <h2>What brings you to Dribble?</h2>
          <p>Select the options that best describe you. Don't worry, you can explore other options later.</p>
          <div className="purpose-options">
            <div
              className={`purpose-option ${selectedOptions.includes('personal') ? 'selected' : ''}`}
              onClick={() => toggleOption('personal')}
            >
              <img src='https://ouch-cdn2.icons8.com/urwzg2QVE5ORLXl11E0SEk2qhzxuz0GWMfgvhg5GnWo/rs:fit:368:352/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzIx/Lzk3MDJhNWU0LWUy/NjktNDQwZC05ZGJh/LTZlODU0NzJmZWMy/Ny5wbmc.png' alt='Im a designer looking to share my work'/>
              <b> I'm a designer looking to share my work</b>
            </div>
            <div
              className={`purpose-option ${selectedOptions.includes('business') ? 'selected' : ''}`}
              onClick={() => toggleOption('business')}
            >
              <img src='https://ouch-cdn2.icons8.com/YOJXayE0Cnir22uCLOt2JkuZO5O1uVzg5o2ijj6xSzY/rs:fit:368:342/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjY2/LzY5MmFkMmI2LTg2/ZmEtNGE2OS1iZGE2/LTQ2ZWZhZmEwMjA5/ZC5wbmc.png' alt='Im looking to hire designer'/>
              <b> I'm looking to hire a designer</b>
            </div>
            <div
              className={`purpose-option ${selectedOptions.includes('inspiration') ? 'selected' : ''}`}
              onClick={() => toggleOption('inspiration')}
            >
              <img src='https://ouch-cdn2.icons8.com/Wv1RiPtijNX-pZHMjze-Yh_znH0ch4FoN2OiZk4531Y/rs:fit:368:283/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODA2/L2I0NmU0ODViLTQ0/OWQtNGZiYy1iMTQ2/LWI5OGEzY2RhYzUx/My5wbmc.png' alt='Im looking for design inspiration'/>
              <b>  I'm looking for design inspiration</b>
            </div>
          </div>
          <br/>
          <h3><b>Anything else? You can select multiple</b></h3>
          <CustomButton text="Finish" width="200px"  disabled={!isNextEnabled} />

          <p onClick={handlePrev} style={{ cursor: 'pointer', marginTop:'5px'}}> or press RETURN</p>
        </form>
      </div>
    </div>
  );
}

export default SelectPurposeScreen;
