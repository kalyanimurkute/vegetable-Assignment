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

export default FeatureCard;