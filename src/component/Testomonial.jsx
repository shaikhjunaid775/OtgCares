import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Jessica Elba',
    title: 'CEO, Salesforce',
    image: '/images/R-Wx_NHvZBci3KLrgXhp1.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam placeat esse incidunt blanditiis maxime at quisquam ipsum quia voluptates?'
  },
  {
    name: 'Michael Chen',
    title: 'CTO, TechNova',
    image: '/images/y9s3xOJV6rnQPKIrdPYJy.png',
    text: 'TechNova transformed our workflow. The intuitive interface and 24/7 support are game changers!'
  },
  {
    name: 'Priya Singh',
    title: 'Founder, Creatify',
    image: '/images/user3.png',
    text: 'Creatify grew 3x after using this product. The regular updates and security are unmatched.'
  },
  {
    name: 'David Kim',
    title: 'Product Manager, InnovateX',
    image: '/images/user4.png',
    text: 'The best investment for our team. Lightning fast and always reliable!'
  },
];

function Testomonial() {
  return (
    <section className="py-12 text-blue-900 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-blue-600">What clients say about their experience with us</p>
            <h2 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Client Testimonials</h2>
          </div>

          <div className="order-3 mt-8 text-center md:mt-12">
            <button className="mb-20 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">More reviews on Google</button>
          </div>

          <div className="relative mx-auto max-w-2xl w-full mt-10">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full"
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl px-6 py-10">
                    <span className="rounded-full bg-blue-500 p-3 text-5xl text-white mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" clipRule="evenodd" /></svg>
                    </span>
                    <blockquote className="mt-4 flex-1">
                      <p className="max-w-xl text-lg font-medium leading-relaxed text-blue-900">{t.text}</p>
                    </blockquote>
                    <div className="mx-auto mt-8 flex items-center">
                      <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src={t.image} alt={t.name} />
                      <div className="ml-4 text-left">
                        <p className="text-base font-bold text-blue-900">{t.name}</p>
                        <p className="text-blue-900 mt-0.5 text-sm">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testomonial;