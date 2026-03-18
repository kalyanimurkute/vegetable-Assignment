import React from 'react'
import Navbar from '../components/Navbar'
import Data from '../../data.json'
import VegetableCard from '../components/VegetableCard'

function Vegetables() {
  return (
    <div>
      <Navbar />

      <div className='min-h-screen mt-20 p-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>
          Fresh Vegetables, fruits 
        </h1>

        <div className='flex flex-wrap justify-center'>
          {Data.map((vegItem) => {
            return (
              <VegetableCard
                key={vegItem.id}
                id={vegItem.id}
                name={vegItem.name}
                image={vegItem.image}
                description={vegItem.description}
                price={vegItem.price}
                unit={vegItem.unit}
                category={vegItem.category}
                tags={vegItem.tags}
              />
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default Vegetables