import React, { useState } from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";
import { auth, googleProvider } from "../firebase";

const SignIn = () => {
  document.title = "SignIn | Universal Cloud";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        alert("Please fill all the fields properly!");
      } else {
        await auth.signInWithEmailAndPassword(email, password);
        alert(`Welcome back!`);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const loginWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then(() => {
      alert("Signin Successful! Redirecting...");
      setTimeout(() => { window.location.replace("/home") }, 2000);
    }).catch(e => {
      console.log(e.message);
    });
  }

  const loginWithDiscord = () => {
    alert("Discord login is currently not available. Please try other login methods.")
  }
  return (
    <div className="login login-body">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <NavLink to="/" className="back-button">&larr; Back</NavLink>
        <div className="neon-box">

          <section>
            <div className="neon-bg"></div>
            <div className="login-card">
              <h2>Login</h2>
              <form id="loginForm">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label for="password">Password</label>
                <input type={showPass ? "text" : "password"} id="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="toggle-pass" onClick={() => setShowPass(showPass ? false : true)}>Show / Hide Password</div>
                <button type="submit" onClick={(e) => signIn(e)}>Login</button>
              </form>
              <div className="social-buttons">
                <button onClick={() => loginWithGoogle()}>
                  <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path fill="#00f0ff"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg> Google
                </button>
                <button onClick={() => loginWithDiscord()}>
                  <svg width="33px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="#00f0ff"
                      d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                  </svg> Discord
                </button>
              </div>
              <div className="switch">Don't have an account? <NavLink to="/auth/signup">Sign up</NavLink></div>
            </div>

            <div className="toast" id="toast"></div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default SignIn;