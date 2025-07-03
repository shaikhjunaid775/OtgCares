import React from 'react'

const cards = [
  {
    image: "https://www.yankodesign.com/images/design_news/2019/07/desk-setups-that-maximize-productivity-part-2/Desk-Setup_12.jpg",
    description: "Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one."
  },
  {
    image: "https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg",
    description: "Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two."
  },
  {
    image: "https://i.pinimg.com/564x/33/d6/54/33d654e8058fdf69e160dcbd2235cdac.jpg",
    description: "Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three."
  },
  {
    image: "https://i.pinimg.com/564x/39/b8/01/39b801afe355e623bcb3928b1c1b046d.jpg",
    description: "Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four."
  },
  {
    image: "https://i.pinimg.com/564x/2b/b5/48/2bb548dbf4a4c57381a7b7f736b4930b.jpg",
    description: "Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five."
  },
];

function Preview() {
    return (
        <>
            <section className="flex flex-col min-h-screen justify-center items-center px-2 sm:px-4 overflow-x-auto">
                <div className="flex  md:overflow-x-visible w-full max-w-6xl mt-6  pt-12 gap-4">
                  {cards.map((card, idx) => (
                    <div key={idx} className="flex-shrink-0 w-[85vw] sm:w-[340px] md:w-96 relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform">
                        <article className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group w-full" style={{backgroundImage: `url('${card.image}')`}}>
                            <div className="relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[20rem] sm:pt-[30rem] transform duration-500">
                                <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-6 sm:p-8 lg:p-10 h-full justify-end flex flex-col ">
                                    <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 ">{card.description}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                  ))}
                </div>
            </section>
        </>
    )
}

export default Preview