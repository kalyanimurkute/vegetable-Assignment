import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Image from '../assets/vegetable-img.png';
import IcoFresh from "../assets/features/fresh.png";
import IcoVariety from "../assets/features/variety.png";
import IcoDelivery from "../assets/features/delivery.png";
import FeatureCard from '../components/FeatureCard.jsx';
const FEATURES_CONFIG = [
{
  title: 'Freshness Guaranteed',
  description: 'We source our vegetables directly from local farms, ensuring that you receive the freshest produce possible.',
  imgsrc : IcoFresh,
},
{
  title: 'Wide Variety',
  description: 'We offer a diverse selection of fresh vegetables to suit every taste and dietary requirement you may have .',
  imgsrc : IcoVariety,
},
{
  title: 'Convenient Delivery',
  description: 'Enjoy the convenience of having fresh vegetables delivered right to your doorstep, saving you time and effort.',
  imgsrc : IcoDelivery, 
}

];



function Home() {
  return (
    <div>
      <Navbar />

      <div className='min-h-screen '>
       <div className='flex flex-col md:flex-row items-center justify-center gap-15 mt-10'>
        <img src={Image} alt="Vegetable Background" className="h-[300px]" />
        <div>
        <h6 className='text-[25px]! font-bold text-center md:text-[35px]! text-[#B95E82]' >one the platform for all<br/> the vegetable you need.</h6>
      </div>
      </div>
      <h2 className='text-[30px]! text-[black] text-center mt-10 font-bold'>
        why you choose us ? we provide the freashest vegetables .
      </h2>

      <div className='flex flex-col w-full justify-center items-center md:flex-row mt-10 '>
        {FEATURES_CONFIG.map((feature, index) => {
          const { title, description, imgsrc } =feature;
          return (
             <FeatureCard 
             key={index}
             title={title}
             description={description}
             imgsrc={imgsrc}
             />
        );
      })}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home