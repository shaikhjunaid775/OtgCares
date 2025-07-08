import React from 'react';
import { motion } from 'framer-motion';
import AnimatedForm, { 
  AnimatedFormField, 
  AnimatedInput, 
  AnimatedButton, 
  AnimatedText 
} from '../component/AnimatedForm';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AnimatedForm className="w-full max-w-md mx-auto">
        <div className="px-8 py-12">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Welcome Back
          </motion.h2>
          
          <AnimatedFormField delay={0.1}>
            <AnimatedText className="mb-2 text-sm text-gray-600" delay={0.1}>
              Email address
            </AnimatedText>
            <AnimatedInput
              type="email"
              placeholder="Enter your email"
              className="mb-4"
              delay={0.1}
            />
          </AnimatedFormField>

          <AnimatedFormField delay={0.2}>
            <AnimatedText className="mb-2 text-sm text-gray-600" delay={0.2}>
              Password
            </AnimatedText>
            <AnimatedInput
              type="password"
              placeholder="Enter your password"
              className="mb-6"
              delay={0.2}
            />
          </AnimatedFormField>

          <AnimatedFormField delay={0.3}>
            <AnimatedButton
              className="bg-blue-600 text-white hover:bg-blue-700 mb-4"
              delay={0.3}
            >
              Sign In
            </AnimatedButton>
          </AnimatedFormField>

          <AnimatedFormField delay={0.4}>
            <AnimatedText className="text-center text-sm text-gray-500" delay={0.4}>
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up
              </a>
            </AnimatedText>
          </AnimatedFormField>
        </div>
      </AnimatedForm>
    </div>
  );
}

export default Login;