function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="h-48 w-full object-cover hover:scale-105 transition-transform"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">${property.price}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
