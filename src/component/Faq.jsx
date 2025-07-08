import React, { useState } from 'react'

function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);
  const faqs = [
    {
      question: 'How can I pay for my appointment ?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.'
    },
    {
      question: 'What can I expect at my first consultation ?',
      answer: 'You can expect a thorough discussion of your needs and a plan tailored to you.'
    },
    {
      question: 'What are your opening hours ?',
      answer: 'We are open from 9am to 5pm, Monday to Friday.'
    },
    {
      question: 'Do I need a referral ?',
      answer: 'A referral is not required, but it can be helpful.'
    },
    {
      question: 'Is the cost of the appointment covered by private health insurance ?',
      answer: 'Coverage depends on your insurance provider. Please check with them.'
    }
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-12 text-gray-900">Frequently asked questions</h1>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full flex items-center justify-between py-6 focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-lg text-left font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-2 pb-6 text-gray-600 animate-fade-in" id={`faq-answer-${idx}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq