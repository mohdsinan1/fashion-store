"use client";
import "./AuthPage.css";
import { useState } from "react";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-container">
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>

      <form className="auth-form">
        {!isSignIn && (
          <input type="text" placeholder="Username" required />
        )}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-button">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <p className="toggle-text">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}
        <button onClick={toggleForm} className="toggle-button">
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
      </p>
    </div>
  );
}
