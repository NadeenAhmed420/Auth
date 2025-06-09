// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ useNavigate to redirect
import { login } from "../api/auth"; // ✅ your login function

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ initialize useNavigate

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      console.log("User logged in:", userData);
  
      // ✅ Store the correct token
      localStorage.setItem("token", userData.accessToken);
      console.log("Token saved to local storage", userData.accessToken);
  
      navigate("/dashboard"); // ✅ redirect after saving the token
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || "Something went wrong");
    }
  };
  

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
