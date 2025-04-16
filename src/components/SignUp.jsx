import React, { useState } from "react";
import "./signup.css";
import { auth, db, googleProvider } from "../firebase";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  document.title = "Sign Up | Universal Cloud";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    try {
      if (!username || !email || !password || !cpassword) {
        alert("Please fill all the fields properly!");
      } else if (password !== cpassword) {
        alert("Passwords don't match. Please try again");
      } else {
        const result = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await result.user.updateProfile({
          displayName: username,
        });
        await db.collection("users").doc(result.user.uid).add({
          username,
          email,
          rank: "Free User",
          photoURL: "https://i.ibb.co/qLt4dGrv/avatar.jpg",
        });
        alert(`Welcome ${username}!`);
        window.location.replace("/home");
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const googleSignUp = async () => {
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        alert("Signup Successful! Redirecting...");
        setTimeout(() => {
          window.location.replace("/home");
        }, 2000);
      })
      .catch((e) => {
        alert(e.mssage);
      });
  };
  return (
    <div className="register register-body">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <NavLink to="/" className="back-button">
          &larr; Back
        </NavLink>
        <div className="neon-box">
          <section>
            <div className="neon-background">
              <div className="neon-circle"></div>
              <div className="neon-circle"></div>
            </div>
            <div className="signup-box" role="form">
              <h2>Sign Up</h2>
              <form id="signupForm" novalidate>
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  aria-required="true"
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                />

                <label for="password">Password</label>
                <div className="input-container">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    aria-required="true"
                    minlength="6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="toggle-password"
                    onclick="togglePassword('password', this)"
                  >
                    <i className="fas fa-eye"></i>
                  </div>
                </div>
                <div className="strength" id="strength"></div>

                <label for="confirm">Confirm Password</label>
                <div className="input-container">
                  <input
                    type="password"
                    id="confirm"
                    placeholder="Confirm Password"
                    required
                    aria-required="true"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                  <div
                    className="toggle-password"
                    onclick="togglePassword('confirm', this)"
                  >
                    <i className="fas fa-eye"></i>
                  </div>
                </div>
                <div className="password-match" id="match"></div>

                <button type="submit" id="submitBtn" onClick={(e) => signUp(e)}>
                  Create Account
                </button>
              </form>
              <div className="note">Or sign up with</div>
              <div className="social-login">
                <NavLink to="#" onClick={() => googleSignUp()}>
                  <svg
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="#00f0ff"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
            <div className="toast" id="toast"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
