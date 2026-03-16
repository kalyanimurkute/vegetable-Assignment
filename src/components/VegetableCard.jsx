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
  return (
    <div className="border border-solid border-slate-500 bg-white m-4 p-4 w-90 rounded-lg shadow-md">
      
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3>{name}</h3>
      <p className="text-gray-500">{description}</p>
      <span className="text-xl font-bold">₹ : {price}</span><p> per {unit}</p>
      <p>Category : {category}</p>

    </div>
  );
}

export default VegetableCard;