import React from 'react'
import Header from '../component/Home/Header'
import Banner from '../component/Home/Banner'
import { Outlet } from 'react-router-dom'
import DesignIdeas from '../component/Home/DesignIdeas'
import BentoGallery from '../component/Home/BentoGallery'
import WhyChooseUs from '../component/Home/WhyChooseUs'
import CallToAction from '../component/Home/CallToAction'
import Testomonial from '../component/Home/Testomonial'
import Preview from '../component/Home/Preview'
import Faq from '../component/Home/Faq'


function Home() {
    return (
        <>
            <div className='flex flex-col'>
                <Banner />
                <DesignIdeas />
                <BentoGallery />
                <WhyChooseUs />
                <Testomonial />
                <Preview />
                <Faq />
                <CallToAction />
            </div>
        </>
    )
}

export default Home