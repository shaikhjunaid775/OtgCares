import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

function Footer() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const offerings = ["Modular Interiors", "Home Renovation", "Design Consultation"];
    const designIdeas = ["Modular Kitchen", "Wardrobe", "Living Room"];
    const magazine = ["Room Ideas", "Decor & Inspiration", "Expert Advice"];
    const livspaceTV = ["Videos", "Episodes", "Tips"];

    const handleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <footer className="bg-[#4b3a4e] text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                {/* Logo & Social & App */}
                <div className="flex flex-col items-start gap-6 col-span-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 mb-2">
                        <img src="/logo.svg" alt="Logo" className="w-[300px] h-auto" />
                    </div>
                    {/* <div className="flex gap-3 mb-2">
                        <a href="#" className="hover:text-pink-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-pink-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-pink-400"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-pink-400"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#" className="hover:text-pink-400"><i className="fab fa-youtube"></i></a>
                    </div> */}
                    <div className="text-xs font-semibold mb-1">DOWNLOAD OUR APP</div>
                    <div className="flex gap-2 flex-wrap">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
                    </div>
                </div>
                {/* Offerings */}
                <div>
                    <div className="text-xs font-semibold mb-2 text-gray-300">OFFERINGS</div>
                    <ul>
                        <li
                            className="mb-2 flex items-center gap-1 cursor-pointer select-none"
                            onClick={() => handleDropdown('offerings')}
                        >
                            Interiors  {openDropdown === 'offerings' ? <ChevronUp /> : <ChevronDown />}
                        </li>
                        {openDropdown === 'offerings' && (
                            <ul className="ml-4 mb-2">
                                {offerings.map((item, idx) => (
                                    <li key={idx} className="mb-1 text-sm cursor-pointer hover:text-pink-300">{item}</li>
                                ))}
                            </ul>
                        )}
                    </ul>
                </div>
                {/* Get Inspired */}
                <div>
                    <div className="text-xs font-semibold mb-2 text-gray-300">GET INSPIRED</div>
                    <ul>
                        <li
                            className="mb-2 flex items-center gap-1 cursor-pointer select-none"
                            onClick={() => handleDropdown('designIdeas')}
                        >
                            Design Ideas {openDropdown === 'designIdeas' ? <ChevronUp /> : <ChevronDown />}
                        </li>
                        {openDropdown === 'designIdeas' && (
                            <ul className="ml-4 mb-2">
                                {designIdeas.map((item, idx) => (
                                    <li key={idx} className="mb-1 text-sm cursor-pointer hover:text-pink-300">{item}</li>
                                ))}
                            </ul>
                        )}
                        <li
                            className="mb-2 flex items-center gap-1 cursor-pointer select-none"
                            onClick={() => handleDropdown('magazine')}
                        >
                            Magazine {openDropdown === 'magazine' ? <ChevronUp /> : <ChevronDown />}
                        </li>
                        {openDropdown === 'magazine' && (
                            <ul className="ml-4 mb-2">
                                {magazine.map((item, idx) => (
                                    <li key={idx} className="mb-1 text-sm cursor-pointer hover:text-pink-300">{item}</li>
                                ))}
                            </ul>
                        )}
                        <li
                            className="mb-2 flex items-center gap-1 cursor-pointer select-none"
                            onClick={() => handleDropdown('livspaceTV')}
                        >
                            Livspace TV  {openDropdown === 'livspaceTV' ? <ChevronUp /> : <ChevronDown />}
                        </li>
                        {openDropdown === 'livspaceTV' && (
                            <ul className="ml-4 mb-2">
                                {livspaceTV.map((item, idx) => (
                                    <li key={idx} className="mb-1 text-sm cursor-pointer hover:text-pink-300">{item}</li>
                                ))}
                            </ul>
                        )}
                    </ul>
                </div>
                {/* Company */}
                <div>
                    <div className="text-xs font-semibold mb-2 text-gray-300">COMPANY</div>
                    <ul>
                        <li className="mb-2 cursor-pointer">Refer a friend</li>
                        <li className="mb-2 cursor-pointer">How it works</li>
                        <li className="mb-2 cursor-pointer">Careers</li>
                        <li className="mb-2 cursor-pointer">Policies</li>
                        <li className="mb-2 cursor-pointer">Terms and conditions</li>
                        <li className="mb-2 cursor-pointer">About us</li>
                        <li className="mb-2 cursor-pointer">Store Locator</li>
                        <li className="mb-2 cursor-pointer">Contact us</li>
                        <li className="mb-2 cursor-pointer">Privacy</li>
                        <li className="mb-2 cursor-pointer">Own a franchise</li>
                    </ul>
                </div>
                {/* Contact Us */}
                <div>
                    <div className="text-xs font-semibold mb-2 text-gray-300">CONTACT US</div>
                    <div className="mb-2">
                        <span className="block text-sm font-bold">Call us</span>
                        <span className="block text-sm">1800-309-0930</span>
                    </div>
                    <div>
                        <span className="block text-sm font-bold">Email us</span>
                        <span className="block text-sm">care@livspace.com</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-700 text-center opacity-70 text-xs px-2">
                <p>© 2024 Livspace. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;