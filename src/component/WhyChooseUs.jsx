import React from 'react'

const features = [
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    desc: 'Optimized for performance with load times under 2 seconds, ensuring your users never wait.'
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure by Design',
    desc: 'Enterprise-grade security with end-to-end encryption and regular penetration testing.'
  },
  {
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Intuitive Interface',
    desc: 'Designed for humans with thoughtful UX patterns that reduce learning curves.'
  },
  {
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Our award-winning support team is available around the clock to assist you.'
  },
  {
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Regular Updates',
    desc: 'Continuous improvements with new features released every two weeks.'
  },
  {
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '99.9% Uptime',
    desc: 'Guaranteed reliability with our distributed cloud infrastructure.'
  },
];

function WhyChooseUs() {
    return (
        <>
            <div className="bg-gray-50">
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-blue-600 font-semibold text-lg">WHY CHOOSE US</span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Our Key Features</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                                Discover what makes our product stand out from the competition.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, idx) => (
                              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className={`w-14 h-14 ${feature.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                                  {feature.svg}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WhyChooseUs