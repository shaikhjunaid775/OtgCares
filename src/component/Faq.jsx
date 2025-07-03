import React, { useState } from 'react'

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
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
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>
          <div className="my-6 " ></div>
          <div>
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  className="flex items-center focus:outline-none w-full"
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-500 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: openIndex === idx ? 'rotate(90deg)' : 'rotate(0deg)' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white text-left">{faq.question}</h1>
                </button>
                {openIndex === idx && (
                  <div className="flex mt-8 md:mx-10" id={`faq-answer-${idx}`}>
                    <span className="border border-blue-500"></span>
                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
                <hr className="my-4 border-gray-200 dark:border-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq