import React, { useState } from 'react';

const videos = [
  {
    title: "Elevate Your Home with Stunning Bathroom Designs | Video",
    poster: "https://images.livspace-cdn.com/w:460/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/1real-homes-in-1669021353-jiSjM/ond-2022-1669032781-pWI47/livspace-tv-1714799018-FtsTo/balcony-1714799063-IMeGh.png",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    desc: "Eren lives in a world where enormous walls protect humanity from man-eating giants known as Titans. But when a colossal Titan breaks the wall, everything changes.",
    info: "24 eps • Action, Drama",
    ep: 24,
  },
  {
    title: "Modern Balcony Design Ideas | Video",
    poster: "https://images.livspace-cdn.com/w:460/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/1real-homes-in-1669021353-jiSjM/ond-2022-1669032781-pWI47/livspace-tv-1714799018-FtsTo/balcony-1714799063-IMeGh.png",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    desc: "A story about heroes with superpowers in a modern world.",
    info: "13 eps • Super Power",
    ep: 13,
  },
  {
    title: "Dine In Style With Livspace Dining Room Designs | Video",
    poster: "https://images.livspace-cdn.com/w:460/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/1real-homes-in-1669021353-jiSjM/ond-2022-1669032781-pWI47/livspace-tv-1714799018-FtsTo/balcony-1714799063-IMeGh.png",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    desc: "A high schooler finds a notebook that can kill anyone whose name is written in it.",
    info: "37 eps • Thriller, Supernatural",
    ep: 37,
  },
];

function OTGTv() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <main className="py-28 px-10 flex-grow max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <section className="md:col-span-2 space-y-4">
          <div className="w-full aspect-video bg-black rounded overflow-hidden shadow-lg">
            <video
              key={videos[selected].src} // force reload on src change
              className="w-full h-full bg-black"
              controls
              preload="metadata"
              poster={videos[selected].poster}
            >
              <source src={videos[selected].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">{videos[selected].title}</h3>
            {/* <p className="text-gray-500 text-sm mb-2">{videos[selected].info}</p> */}
            {/* <p className="text-gray-700">{videos[selected].desc}</p> */}
          </div>
        </section>

        <aside>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-700 pl-3">More videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-h-[26rem] overflow-auto px-2">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className={`relative group rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer ${selected === idx ? 'ring-2 ring-red-700' : ''}`}
                onClick={() => setSelected(idx)}
              >
                <img src={video.poster} alt={video.title} className="w-full max-h-[10rem] min-h-[10rem]  group-hover:scale-105 transition-transform duration-300" />
                <div className="p-2">
                  <h3 className="text-sm font-semibold truncate">{video.title}</h3>
                  {/* <p className="text-xs text-gray-400">{video.info}</p> */}
                </div>
                {/* <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Ep {video.ep}</span> */}
              </div>
            ))}
          </div>
        </aside>
      </main>
    </>
  );
}

export default OTGTv;