import React from "react";
import "./Landing.css";
import { NavLink } from "react-router-dom";

const Landing = () => {

  document.title = "Universal Cloud || IT Solutions";

  setTimeout(() => {
    generateParticles()
  }, 300);

  function generateParticles() {
    const canvas = document.getElementById('bg');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    let particles = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00f0ff";
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resizeCanvas);
  }
  return (
    <div className="landing-main landing-body">
      <canvas id="bg"></canvas>

      {/* <!-- Landing Section --> */}
      <div class="landing">
        <div class="logo-wrapper">
          <img src="/img/logo.png" alt="Logo" class="logo-img" />
        </div>
        <h1 class="title">Universal Cloud</h1>
        <p class="subtitle">Blazing-fast hosting for gamers and developers. Stylish. Powerful. Universal.</p>

        <div class="slider">
          <div class="card"><div class="icon">⚡</div><h3>Lightning Fast</h3><p>Ultra-low latency and top performance on all servers.</p></div>
          <div class="card"><div class="icon">🎮</div><h3>Game Ready</h3><p>Minecraft, Rust, FiveM and more--all optimized and ready.</p></div>
          <div class="card"><div class="icon">⏰</div><h3>24/7 Support</h3><p>Instant help via Discord or ticket, whenever you need it.</p></div>
          <div class="card"><div class="icon">💸</div><h3>Affordable Plans</h3><p>Starting at just $2/mo. UPI, crypto, and card supported.</p></div>
        </div>

        <div class="buttons">
          <button class="btn"><NavLink to={"/auth/signin"}>Login</NavLink></button>
          <button class="btn"><NavLink to={"/auth/signup"}>Sign Up</NavLink></button>
          <button class="btn letsgo-btn"><NavLink to={"/home"}>Let's Go!</NavLink></button>
        </div>
      </div>

      {/* <!-- Scrollable Section to Test Swiping --> */}
      <div class="extra-section">
        <h2>Welcome to the Future of Hosting</h2>
        <p>Scroll down for more content or swipe on mobile to explore your journey with Universal Host.</p>
      </div>
    </div>
  )
}

export default Landing;