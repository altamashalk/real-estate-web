import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-900">PropBot</div>

      <div className="space-x-4 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/listings">Listings</Link>

        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-blue-600 text-white py-1 px-4 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 text-white py-1 px-4 rounded"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className="py-1 px-3 rounded border"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
