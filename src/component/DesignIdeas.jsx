import { ChevronRight } from 'lucide-react'
import React from 'react'

function DesignIdeas() {
    const cardData = [
        {
            id: 1,
            title: 'Tailored Modular Designs',
            description: 'Seamless kitchens, wardrobes, and storage solutions',
            image: 'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
        },
        {
            id: 2,
            title: 'Elegant Space Solutions',
            description: 'Modular interiors made to maximize comfort',
            image: 'https://via.placeholder.com/1200x500?text=Banner+1',
        },
        {
            id: 3,
            title: 'Smart Storage Options',
            description: 'Organized wardrobes and innovative kitchen storage',
            image: 'https://via.placeholder.com/1200x500?text=Banner+2',
        },
        {
            id: 4,
            title: 'Stylish & Functional Designs',
            description: 'Kitchens and wardrobes that match your vibe',
            image: 'https://via.placeholder.com/1200x500?text=Banner+3',
        },
    ];
    return (
        <>
            <div className='bg-zinc-100 py-8'>
                <div class="text-center py-10 px-4 w-lg-max md:text-center md:text-xl md:leading-7 md:w-4/5 m-auto mt-3">
                    <h1 class="font-bold text-4xl mb-4 text-[#41303e]">From concept to creation — all your interior needs covered</h1>
                    <h1 class="text-xl">Transforming spaces with expert design, quality materials, and personalized solutions tailored to your style.
                        Let me know if you want variations based on tone — modern, luxurious, minimal, or friendly.</h1>
                </div>

                <section id="Projects"
                    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-6 mt-10 mb-5 px-3">

                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <a href="#">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-80 w-full object-cover rounded-t-xl"
                                />
                                <div className="px-4 py-3">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">{card.title}</span>
                                    <p className="text-lg font-bold text-black block capitalize">
                                        {card.description}
                                    </p>
                                    <div className="flex items-center mb-3">
                                        <div className="ml-auto bg-gray-400 p-2 rounded-full">
                                            <ChevronRight size={16} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}


                </section>

            </div>
        </>
    )
}

export default DesignIdeas