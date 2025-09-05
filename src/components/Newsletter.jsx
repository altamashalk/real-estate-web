export default function Newsletter() {
  return (
    <section className="bg-blue-100 py-8 px-8 text-center">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Get in Touch</h2>
      <p className="mb-4 text-gray-700">Subscribe now for exclusive property insights and deals.</p>
      <form className="flex justify-center max-w-lg mx-auto">
        <input type="email" placeholder="Email address" className="px-4 py-2 rounded-l border border-blue-300 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-6 rounded-r">Submit</button>
      </form>
    </section>
  );
}
