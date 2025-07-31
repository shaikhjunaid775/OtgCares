import React, { useState } from 'react';
import AnimatedForm, { 
  AnimatedFormField, 
  AnimatedInput, 
  AnimatedButton, 
  AnimatedText 
} from '../component/Home/AnimatedForm';

function ForgotPassword() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Simple phone validation: 10 digits, can be improved as needed
  const validatePhone = (value) => {
    return /^\d{10}$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      setError('Phone number is required.');
      setSuccess(false);
      return;
    }
    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AnimatedForm className="w-full max-w-md mx-auto">
        <div className="px-8 py-12">
          <AnimatedText className="text-3xl font-bold text-center mb-8 text-gray-800">
            Forgot Password
          </AnimatedText>
          <form onSubmit={handleSubmit}>
            <AnimatedFormField delay={0.1}>
              <AnimatedText className="mb-2 text-sm text-gray-600" delay={0.1}>
                Phone Number
              </AnimatedText>
              <AnimatedInput
                type="tel"
                placeholder="Enter your phone number"
                className="mb-4"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                delay={0.1}
                maxLength={10}
              />
            </AnimatedFormField>
            {error && (
              <AnimatedText className="text-red-500 text-sm mb-2" delay={0.2}>
                {error}
              </AnimatedText>
            )}
            {success && (
              <AnimatedText className="text-green-600 text-sm mb-2" delay={0.2}>
                Password reset link sent to your phone!
              </AnimatedText>
            )}
            <AnimatedFormField delay={0.3}>
              <AnimatedButton
                className="bg-blue-600 text-white hover:bg-blue-700 mb-4"
                delay={0.3}
                type="submit"
              >
                Send Reset Link
              </AnimatedButton>
            </AnimatedFormField>
          </form>
        </div>
      </AnimatedForm>
    </div>
  );
}

export default ForgotPassword; 