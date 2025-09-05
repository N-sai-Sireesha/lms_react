// src/pages/Register.jsx
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required /> <br />
        <input type="email" placeholder="Email" required /> <br />
        <input type="password" placeholder="Password" required /> <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </section>
  );
}

export default Register;
