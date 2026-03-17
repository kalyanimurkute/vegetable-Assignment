import { useState } from "react";
import Button from "./Button";
import {CircleMinus, CirclePlus } from "lucide-react"
function VegetableCard({
  id,
  name,
  image,
  description,
  price,
  unit,
  category,
  tags
}) {
 const [quantity, setQuantity]=useState(1);




  return (
    <div className="border border-solid border-slate-500 bg-white m-4 p-4 w-90 rounded-lg shadow-md "
    key={tags}
    >
      <div className=" relative">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />

<span className="absolute top-2 right-2 text-white px-2 py-1 text-sm bg-black rounded">{category}</span>
      </div>
      <h3>{name}</h3>
      <p className="text-gray-500">{description}</p>
      <span className="text-xl font-bold">₹ : {price}</span><p> per {unit}</p>
    <p>{tags.join(", ")}</p>
    
    <div  className="flex justify-center item-center my-4 gap-4">
      <CirclePlus  className=" cursor-pointer" onClick={()=>{
        setQuantity(quantity + 1);
      }}/>
      <label className="text-2xl">
        {quantity}
      </label>
      <CircleMinus  className="cursor-pointer" onClick={()=>{
        setQuantity(quantity - 1);
      }}/>
    </div>
    <div className="flex justify-center">
    <Button title="Add To Cart"/>
    </div>
    </div>
  );
}

export default VegetableCard;