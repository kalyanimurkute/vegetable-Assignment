import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/Button.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import Image from '../assets/vegetable-img.png';

function Home() {
  return (
    <div>
      <Navbar />

      <div className='min-h-screen '>
        <div className='flex flex-col md:flex-row items-center justify-center gap-20 mt-10'>
          <img src={Image} alt="Vegetable Background" className="h-[300px]" />
          <div>
            <h6 className='text-[40px]! font-bold text-center md:text-[50px]! text-[#B95E82]' >one the platform for all<br /> the vegetable you need.</h6>
           <div className='flex flex-col md:flex-row gap-4 mt-8 justify-center'>
            <Button title={"Explore Now"} variant='primary' size='medium' />
            <Button title={"call us"} variant='tertiary' size='medium' />
          </div>
          </div>
        </div>
        <FeatureSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home