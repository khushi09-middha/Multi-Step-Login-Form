import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';

function VerifyEmail({ initialEmail }) {
  const [email, setEmail] = useState(initialEmail || localStorage.getItem('email') || '');
  const [emailResent, setEmailResent] = useState(false); 
  const [confirmationCodeSent, setConfirmationCodeSent] = useState(false); 

  useEffect(() => {
    if (!initialEmail && localStorage.getItem('email')) {
      setEmail(localStorage.getItem('email'));
    }
  }, [initialEmail]);

  const handleResendEmail = () => {

    setEmailResent(true); 
  };

  const handleChangeEmail = () => {
   
  };

  return (
    <div>
      <Header /> 
      <div className='verify-container'>
        <h2>Please verify your email...</h2>
        <img src='https://ouch-cdn2.icons8.com/eCwFMuLz94O9JsgaYYEoJ06bJV5HBHOT9ClsvAAzt9g/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjAw/LzY5ZmE3ZWI5LWQ5/ZmQtNDllMi1hYTVi/LWZjOGNiMjIyZjhj/Yy5zdmc.png' alt="Email" />
        <p>Please verify your email address. We've sent a confirmation email to:</p>
        <b>{email}</b>
        <br/>
        <p>Click the confirmation link in that email to begin using Dribble.</p>
        
        <div className='verify-content'>
          {!confirmationCodeSent && (
            <>
              <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If<br/> you still don't see it, you can <span style={{ color: '#ea4b8b' }} onClick={handleResendEmail}><b>resend the confirmation email.</b></span></p>
              {!emailResent && (
                <p>Sending confirmation email...</p>
              )}
              {emailResent && (
                <p style={{ color: '#ea4b8b' }}><b>Email has been resent. Please check your inbox and spam folder.</b></p>
              )}
            </>
          )}
          {confirmationCodeSent && (
            <p style={{ color: '#ea4b8b' }}><b>Confirmation code has been sent. Please check your email for the code.</b></p>
          )}
          <br />
          <p>Wrong email address? <span onClick={handleChangeEmail} style={{ color: '#ea4b8b', cursor: 'pointer' }}><b>Change it</b></span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VerifyEmail;
