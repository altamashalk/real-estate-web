import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const featured = [
    { id: 1, title: "Luxury Villa", location: "Mumbai", price: "75,00,000", image: "https://picsum.photos/400/300" },
    { id: 2, title: "Modern Apartment", location: "Delhi", price: "45,00,000", image: "https://picsum.photos/401/300" },
    { id: 3, title: "Beach House", location: "Goa", price: "1,20,00,000", image: "https://picsum.photos/402/300" },
  ];

  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
