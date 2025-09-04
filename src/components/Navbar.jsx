import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          RealEstate
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/listings" className="hover:text-blue-600">
            Listings
          </Link>
          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-600">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-700">{user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
