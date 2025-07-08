import React from 'react'
import { motion } from "framer-motion";

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            
            <motion.div 
                className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    width: { duration: 0.6, ease: "easeOut" },
                    opacity: { duration: 0.8, delay: 0.2 }
                }}
                style={{ transformOrigin: "center" }}
            >
                {/* Left Side - Testimonial */}
                <motion.div 
                    className="hidden md:flex flex-col justify-center items-start bg-blue-700 text-white px-10 py-12 w-1/2 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".1"/><path d="M10.5 17.5L16 12l5.5 5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <span className="font-semibold text-lg">Lattice</span>
                        </div>
                        <p className="text-lg mb-8">
                            "The Lattice team loves Dock! The platform streamlines the buying experience and empowers our champions to make the case for our product to internal stakeholders at their companies"
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Dini Mehta"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                                <div className="font-bold">Dini Mehta</div>
                                <div className="text-xs text-blue-100">CRO, Lattice</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Right Side - Form */}
                <motion.div 
                    className="flex-1 flex flex-col justify-center px-8 py-12"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.h2 
                        className="text-2xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        Sign up for OTG Cares. It's free.
                    </motion.h2>
                    
                    <motion.div 
                        className="mb-2 text-sm text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        Sign up with phone<br />
                        
                    </motion.div>
                    <motion.input
                        type="number"
                        placeholder="Phone number"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    />
                    <motion.button 
                        className="w-full bg-blue-100 text-blue-700 font-semibold py-2 rounded-md hover:bg-blue-200 transition mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Continue
                    </motion.button>
                    <motion.p 
                        className="text-xs text-gray-400 mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        By submitting your information, you agree to Dock's Terms of Service and Privacy Policy. You can opt out anytime.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Register