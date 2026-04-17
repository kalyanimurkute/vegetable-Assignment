import React from 'react'
import Button from './Button';

function CartVegetableCard({
    id,
    name,
    image,
    description,
    price,
    unit,
    quantity,
    removeItem
}) {
    return (
        <div className='border border-solid border-slate-500 p-4 m-5 bg-[#FFC29B] flex items-center'>

            <img
                src={image}
                alt={name}
                className='w-32 h-28 object-cover rounded-md bg-gray-400'
            />

            <div className='w-full  ml-4'>

                <p className='text-2xl'>
                    {name}
                    <span className='text-sm ml-2'>
                        (₹{price} / {unit})
                    </span>
                </p>

                <p className='text-gray-600 mt-2'>{description}</p>
                <p className='text-gray-600'>{quantity} × ₹{price}</p>

                <p className='text-lg font-semibold mt-2'>
                    ₹ {quantity * price}
                </p>

                <div className='flex justify-end mt-3'>
                    <Button
                        title="Remove"
                        size='small'
                        variant='tertiary'
                        onclick={() => removeItem(id)}
                    />
                </div>

            </div>
        </div>
    );
}

export default CartVegetableCard;