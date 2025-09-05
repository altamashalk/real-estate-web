import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const image =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirm) return;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Optional: save name to user profile
      if (name) {
        await updateProfile(userCredential.user, { displayName: name });
      }

      navigate("/"); // go to home page after signup
    } catch (error) {
      alert(error.message); // show Firebase error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={image}
            alt="property"
            className="rounded-lg w-full md:w-96 h-64 object-cover"
          />
          <form
            onSubmit={handleSignup}
            className="bg-white p-8 rounded shadow max-w-md w-full"
          >
            <h2 className="text-2xl text-blue-900 font-semibold mb-6">
              Create New Account
            </h2>

            <input
              className="mb-3 border border-gray-300 rounded p-2 w-full"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="mb-3 border border-gray-300 rounded p-2 w-full"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="mb-3 border border-gray-300 rounded p-2 w-full"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              className="mb-2 border border-gray-300 rounded p-2 w-full"
              placeholder="Confirm Password"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />

            {password !== confirm && confirm && (
              <p className="text-red-500 text-sm mb-3">Passwords do not match</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 rounded text-white ${
                loading ? "bg-gray-400" : "bg-blue-600"
              }`}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
