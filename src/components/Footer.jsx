function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
