import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Auth.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);

        alert("Login successful!");

        navigate("/");
      } else {
        alert(data.message || "Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className={Styles["auth-page"]}>
      <div className={Styles["auth-card"]}>

        <h1>Welcome Back</h1>

        <p className={Styles["subtitle"]}>
          Login to continue shopping
        </p>

        <form onSubmit={handleLogin}>

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
            Login
          </button>

        </form>

        <p className={Styles["auth-link"]}>
          Don't have an account?

          <span onClick={() => navigate("/register")}>
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;