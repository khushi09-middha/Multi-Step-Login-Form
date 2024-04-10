import React, { useState } from 'react';
import CustomButton from './button';
function EmailSignupScreen({ setEmail, handleNext }) {
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email', emailInput);
    setEmail(emailInput);
    handleNext();
  };

  return (
    <div className="container">
      <div className="yellow-box">
        <div className='logo'>
          <img src='https://img.icons8.com/?size=48&id=13927&format=png' alt="Logo" />
        </div>
        <h2><b>Discover the world's top <br/>Designer & Creatives.</b></h2>
        <img src='https://ouch-cdn2.icons8.com/_UVOXhivvuKvB1pKMv-NHJa9lbK2w5nK-yrlIvOqHKs/rs:fit:368:292/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzg5/LzM3MTlhZjQ5LWQ3/OTQtNDQ5MC05YzJk/LTNkOTg5OGUwNzM5/OS5wbmc.png'alt='designer' style={{ margin: '30px', padding: '10px' }} />

      </div>
      <div className="form-box">
        <h2>Sign up to Dribble</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="flex-row">
            <div className="flex-item">
              <label htmlFor="name"><b>Name</b></label>
              <input type="text" id="name" className="input-field" placeholder="Enter name" required />
            </div>
            <div className="flex-item">
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" id="username" className="input-field" placeholder="Enter username" required />
            </div>
          </div>
          <div className="flex-item">
            <label htmlFor="email"><b>Email</b></label>
            <input
              type="email"
              id="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="input-field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex-item">
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" id="password" className="input-field" placeholder="Enter your password" required />
          </div>
          <div className="flex-item">
            <div className='flex-group'>
            <input type="checkbox" id="privacyPolicy" required />
            <label htmlFor="privacyPolicy">
  <span style={{ color: 'grey' }}>Creating an account means you're okay with our </span><span style={{ color: '#483896' }}>Terms of Service, Privacy Policy,</span> <span style={{ color: 'grey' }}> and our default </span> <span style={{ color: '#483896' }}>Notification Settings.</span>
</label>

          </div>
          </div>
          <div className="flex-item">
          <CustomButton text="Create Account" width="200px" />


          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSignupScreen;
