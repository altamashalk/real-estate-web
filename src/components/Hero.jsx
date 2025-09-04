import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Browse thousands of listings and discover the perfect property for you.
        </p>
        <Link
          to="/listings"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Browse Listings
        </Link>
      </div>
    </section>
  );
}

export default Hero;
