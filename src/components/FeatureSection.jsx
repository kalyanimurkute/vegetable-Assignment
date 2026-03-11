
import IcoFresh from "../assets/features/fresh.png";
import IcoVariety from "../assets/features/variety.png";
import IcoDelivery from "../assets/features/delivery.png";
import IconFarming from "../assets/features/farming.png";
function FeatureCard({ title, description, imgsrc }) {
  return (
    <div className="bg-white p-5 m-4 w-[220px] rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
      
      <img
        src={imgsrc}
        alt={title}
        className="h-[55px] mx-auto mb-3"
      />

      <h3 className="text-sm font-semibold text-[#F39F9F] mb-2">
        {title}
      </h3>

      <p className="text-md text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}

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
},
{
  title: 'Sustainable Farming',
  description:'Sustainable farming is growing food while protecting the environment for future generations.',
  imgsrc : IconFarming,
}

];

function FeatureSection() {
  return (
    <>
    <div>
      <h2 className='text-[30px]! md:text-[35px]! text-[black] text-center mt-10 mx-2 font-bold'>
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
    
    </>
  )
}

export default FeatureSection
