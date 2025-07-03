import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import { Outlet } from 'react-router-dom'
import DesignIdeas from '../component/DesignIdeas'
import BentoGallery from '../component/BentoGallery'
import WhyChooseUs from '../component/WhyChooseUs'
import CallToAction from '../component/CallToAction'
import Testomonial from '../component/Testomonial'
import Preview from '../component/Preview'
import Faq from '../component/Faq'


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