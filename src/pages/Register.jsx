import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
];

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <motion.div
        className="relative w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          width: { duration: 0.6, ease: 'easeOut' },
          opacity: { duration: 0.8, delay: 0.2 },
        }}
        style={{ transformOrigin: 'center' }}
      >
        {/* Left Side - Image Grid with Stats */}
        <motion.div
          className="hidden md:grid grid-cols-3 grid-rows-4 gap-2 bg-gray-100 p-4 w-1/2 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Images */}
          {images.map((src, i) => (
            <div
              key={i}
              className={`rounded-lg overflow-hidden relative h-24 md:h-28 lg:h-32 ${
                i === 1 || i === 3 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ gridColumn: i === 1 ? '2 / span 2' : undefined, gridRow: i === 1 ? '1 / span 2' : undefined }}
            >
              <img
                src={src}
                alt="grid"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Stat Cards */}
          <div className="absolute top-8 left-6 bg-orange-500 text-white rounded-xl shadow-lg p-6 w-40 md:w-44 lg:w-48 flex flex-col items-start">
            <span className="text-3xl font-bold mb-1">41%</span>
            <span className="text-sm font-medium">of recruiters say entry-level positions are the hardest to fill.</span>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white rounded-xl shadow-lg p-6 w-48 md:w-52 lg:w-56 flex flex-col items-start">
            <span className="text-3xl font-bold mb-1">76%</span>
            <span className="text-sm font-medium">of hiring managers admit attracting the right job candidates is their greatest challenge.</span>
          </div>
        </motion.div>
        {/* Right Side - Form */}
        <motion.div
          className="flex-1 flex flex-col justify-center px-8 py-12 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          
          <motion.h2
            className="text-2xl font-bold mb-2 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Sign in to <span className="text-blue-700">OTG Cares</span>
          </motion.h2>
          <motion.p
            className="mb-6 text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Welcome to OTG Cares, please enter your login details below to use the app.
          </motion.p>
          <motion.input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          />
          
          <div className="flex justify-end mb-4">
            <Link to="/forgot-password" className="text-xs text-blue-700 hover:underline">Forgot the password?</Link>
          </div>
          <motion.button
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
          
          
          {/* Mobile sign up link */}
          <div className="mt-6 text-center text-sm text-gray-500 md:hidden">
            Don't have an account?{' '}
            <a href="#" className="font-semibold text-blue-700 hover:underline">Sign up</a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Register;