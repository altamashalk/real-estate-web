import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      navigate("/listings"); // ✅ login ke baad listings pe bhej do
    } catch (err) {
      console.error(err.message);
      setError("Invalid email or password");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
