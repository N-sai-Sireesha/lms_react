// src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required /> <br />
        <input type="password" placeholder="Password" required /> <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </section>
  );
}

export default Login;
