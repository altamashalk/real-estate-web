export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
        loading="lazy" // ✅ prevents blink
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/400x300.png?text=No+Image"; // ✅ fallback image
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600">
          {property.city}, {property.state}
        </p>
        <p className="text-blue-600 font-bold mt-2">₹ {property.price}</p>
        <span
          className={`inline-block mt-2 px-2 py-1 rounded text-sm ${
            property.type === "sale"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {property.type === "sale" ? "For Sale" : "For Rent"}
        </span>
      </div>
    </div>
  );
}
