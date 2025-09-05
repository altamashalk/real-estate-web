import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const image =
    "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=900&q=80"; // ✅ working Unsplash image

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
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
            onSubmit={handleLogin}
            className="bg-white p-8 rounded shadow max-w-md w-full"
          >
            <h2 className="text-2xl text-blue-900 font-semibold mb-6">Log in</h2>
            <input
              className="mb-3 border border-gray-300 rounded p-2 w-full"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="mb-5 border border-gray-300 rounded p-2 w-full"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 w-full text-white p-2 rounded"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
