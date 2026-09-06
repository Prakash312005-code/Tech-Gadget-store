import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Auth.module.css";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.text();

      if (response.ok) {
        alert(data);

        navigate("/login");
      } else {
        alert(data || "Registration failed");
      }

    } catch (error) {
      console.error("Registration error:", error);

      alert("Something went wrong");
    }
  };

  return (
    <div className={Styles["auth-page"]}>

      <div className={Styles["auth-card"]}>

        <h1>Create Account</h1>

        <p className={Styles["subtitle"]}>
          Join Tech Gadget and start shopping
        </p>

        <form onSubmit={handleRegister}>

          <div className={Styles["input-group"]}>

            <label>Username</label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          </div>

          <div className={Styles["input-group"]}>

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className={Styles["input-group"]}>

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            className={Styles["auth-button"]}
          >
            Create Account
          </button>

        </form>

        <p className={Styles["auth-link"]}>
          Already have an account?

          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
};

export default Register;