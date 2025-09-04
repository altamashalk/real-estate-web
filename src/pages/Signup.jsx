import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully");
      navigate("/"); // ✅ signup ke baad home pe bhej do
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
