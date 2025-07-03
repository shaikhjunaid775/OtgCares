import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const banners = [
    {
        id: 1,
        title: "Home to beautiful interiors",
        subtitle: "Get amazing deals today",
        image: "https://via.placeholder.com/1200x500?text=Banner+1",
        buttonText: "Shop Now",
        buttonLink: "/",
    },
    {
        id: 2,
        title: "Summer Sale",
        subtitle: "Up to 50% off!",
        image: "https://via.placeholder.com/1200x500?text=Banner+2",
        buttonText: "Shop Now",
        buttonLink: "/",
    },
    {
        id: 3,
        title: "New Arrivals",
        subtitle: "Check out the latest trends",
        image: "https://via.placeholder.com/1200x500?text=Banner+3",
        buttonText: "Shop Now",
        buttonLink: "/",
    },
];

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div>
                <ul className="flex justify-center  absolute bottom-5 left-0 right-0 z-10">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-2 h-2 bg-white rounded-full opacity-60 hover:opacity-100 transition duration-300" />
        ),
    };

    return (
        <div className="relative w-full overflow-hidden ">
            <Slider {...settings}>
                {banners.map((item) => (
                    <div key={item.id} className="relative">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full min-h-[700px] max-h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col gap-2 items-center justify-end text-white text-center p-4 pb-12">
                            <h2 className="text-3xl md:text-5xl font-bold">{item.title}</h2>
                            <p className="text-lg md:text-2xl mb-3">{item.subtitle}</p>
                            <Link to={item.buttonLink} class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                                {item.buttonText}
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
