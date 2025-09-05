export default function Hero() {
  return (
    <section className="relative h-80 md:h-96 bg-blue-900 flex items-center justify-center text-center text-white">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46234a"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">
          Find Your Dream Home in One Click!
        </h1>
        <p className="text-lg">Buy | Sell | Rent | Explore</p>
      </div>
    </section>
  );
}
