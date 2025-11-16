"use client"; // required for interactivity

import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Placeholder authentication (replace with API call)
    if (username === "manager" && password === "123456") {
      alert("Login successful!");
      window.location.href = "/dashboard"; // redirect to dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E0F2FE]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#1E40AF] mb-6 text-center">Login to ProSynk</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#1E40AF] text-white rounded-md font-semibold hover:bg-[#3B82F6] transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Forgot your password? <a href="#" className="text-[#3B82F6] hover:underline">Reset here</a>
        </p>
      </div>
    </div>
  );
}
