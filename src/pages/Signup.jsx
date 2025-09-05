import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const image =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"; // ✅ working Unsplash image

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirm) return alert("Passwords don't match");
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/login");
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
              Create new account
            </h2>
            <input
              className="mb-3 border border-gray-300 rounded p-2 w-full"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              className="mb-5 border border-gray-300 rounded p-2 w-full"
              placeholder="Confirm Password"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 w-full text-white p-2 rounded"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
