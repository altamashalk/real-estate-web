import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import { fetchProperties } from "../services/api";

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("sale");

  useEffect(() => {
    fetchProperties().then(setProperties).catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-12 px-8">
        <div className="flex space-x-4 mb-6">
          {["sale","rent"].map(t => (
            <button key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded ${filter===t ? "bg-blue-600 text-white":"bg-gray-200 text-blue-900"}`}>
              {t === "sale" ? "Sale" : "Rent"}
            </button>
          ))}
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {properties.filter(p => filter==="sale" ? p.type==="sale" : p.type==="rent")
            .map((property) => <PropertyCard key={property.id} property={property} />)}
        </div>
      </div>
      <Footer />
    </>
  );
}
