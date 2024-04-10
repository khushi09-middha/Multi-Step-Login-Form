import React, { useState } from 'react';
import EmailSignupScreen from './email-signup-screen';
import SelectProfileScreen from './select-profile-screen';
import SelectPurposeScreen from './select-purpose-screen';
import VerifyEmail from './verify-email';

function MultiStepLoginForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [purpose, setPurpose] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Form submitted!');
  };

  switch (step) {
    case 1:
      return <EmailSignupScreen email={email} setEmail={setEmail} handleNext={handleNext} />;
    case 2:
      return <SelectProfileScreen avatar={avatar} setAvatar={setAvatar} email={email} handleNext={handleNext} handlePrev={handlePrev} />;
    case 3:
      return <SelectPurposeScreen purpose={purpose} setPurpose={setPurpose} handleNext={handleNext} handlePrev={handlePrev} />;
    case 4:
      return <VerifyEmail verificationCode={verificationCode} setVerificationCode={setVerificationCode} handlePrev={handlePrev} handleSubmit={handleSubmit} />;
    default:
      return null;
  }
}

export default MultiStepLoginForm;
