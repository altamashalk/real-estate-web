import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import PropertyCard from "../components/PropertyCard";
import { fetchProperties } from "../services/api";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [saleList, setSaleList] = useState([]);
  const [rentList, setRentList] = useState([]);

  useEffect(() => {
    fetchProperties()
      .then((data) => {
        setFeatured(data.slice(0, 2));
        setSaleList(data.filter((p) => p.type === "sale").slice(0, 4));
        setRentList(data.filter((p) => p.type === "rent").slice(0, 3));
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <section className="relative h-80 md:h-96 flex items-center justify-center text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Find Your Dream Home in One Click!
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            <select className="rounded px-4 py-2 text-blue-900 bg-white">
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <select className="rounded px-4 py-2 text-blue-900 bg-white">
              <option>House</option>
              <option>Villa</option>
            </select>
            <select className="rounded px-4 py-2 text-blue-900 bg-white">
              <option>India</option>
              <option>US</option>
            </select>
            <button className="bg-blue-600 px-6 py-2 rounded text-white font-semibold">
              Find Property
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="my-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {["Rich Data", "Easy Interface", "Verified Listings", "Good Reach"].map(
          (title) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow text-blue-900"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          )
        )}
      </section>

      {/* Property Sections */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Property</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-12">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">
          Best Properties Available For Sale
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4 mb-12">
          {saleList.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">
          Find Your Perfect Rental Home
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-12">
          {rentList.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
