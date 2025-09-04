import PropertyCard from "../components/PropertyCard";

function Listings() {
  const listings = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    title: `Property ${i + 1}`,
    location: "City Center",
    price: `${50 + i * 10},00,000`,
    image: `https://picsum.photos/40${i}/300`,
  }));

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">All Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}

export default Listings;
