import React from 'react';
import BreadCrumb from '../component/Home/BreadCrumb';
import { useLocation } from 'react-router-dom';

const galleryImages = [
    "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
];

const products = [
    {
        image: "https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        oldPrice: 199,
    },
    {
        image: "https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg",
        brand: "Brand",
        name: "Product Name",
        price: 149,
        oldPrice: 199,
    },
];



function Portfolio() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = ['Home', ...pathnames.map(str => str.charAt(0).toUpperCase() + str.slice(1))];

    // Split images into 4 columns for a masonry effect
    const columns = [[], [], [], []];
    galleryImages.forEach((img, idx) => {
        columns[idx % 4].push(img);
    });

    return (
        <>
            <div className="py-18  px-10  gap-y-20 gap-x-14 mt-10 mb-5">
                <BreadCrumb items={breadcrumbItems} />
                <div className="py-4">
                    <h1 className="font-bold text-xl md:text-3xl lg:text-5xl mb-4">OTGCares Interior Design Portfolio</h1>
                    <span className='text-md text-gray-500'>Proposed and completed residential projects by Livspace, featuring innovative designs, latest trends, and personalized aesthetics to match your lifestyle.</span>
                </div>
                <section
                    className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-4 mb-5"
                >
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <a href="#">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-80 w-72 object-cover rounded-t-xl"
                                />
                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>

                                </div>
                            </a>
                        </div>
                    ))}
                </section>
            </div>
                <div className="bg-gray-200">
                    <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Projects: Delivered by OTGCares</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {columns.map((col, colIdx) => (
                                <div className="space-y-2" key={colIdx}>
                                    {col.map((img, imgIdx) => (
                                        <img
                                            key={imgIdx}
                                            className="w-full h-auto object-cover rounded-lg"
                                            src={img}
                                            alt={`Gallery Masonry Image ${colIdx * 10 + imgIdx + 1}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Portfolio;