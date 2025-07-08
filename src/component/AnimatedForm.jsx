import React from 'react';
import { motion } from 'framer-motion';

const AnimatedForm = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        width: { duration: 0.6, ease: "easeOut" },
        opacity: { duration: 0.8, delay: 0.2 + delay }
      }}
      style={{ transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
};

// Animated form field component
export const AnimatedFormField = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + delay }}
    >
      {children}
    </motion.div>
  );
};

// Animated input component
export const AnimatedInput = ({ 
  type = "text", 
  placeholder, 
  className = "", 
  delay = 0,
  ...props 
}) => {
  return (
    <motion.input
      type={type}
      placeholder={placeholder}
      className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 + delay }}
      {...props}
    />
  );
};

// Animated button component
export const AnimatedButton = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) => {
  return (
    <motion.button
      className={`w-full font-semibold py-2 rounded-md transition ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1 + delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Animated text component
export const AnimatedText = ({ 
  children, 
  className = "", 
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 + delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedNav = ({ 
    children, 
    className = "", 
    delay = 0,
    ...props 
  }) => {
    return (
      <motion.div
        className={className}
        initial={{  y: -20 }}
        animate={{  y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 + delay }}
        {...props}
      >
        {children}
      </motion.div>
    );
  };

export default AnimatedForm; 