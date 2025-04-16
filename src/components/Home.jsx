import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  document.title = "Home | Universal Cloud";
  return (
    <div className="home home-body">
      <header>
        <img src="/img/logo.png" alt="Logo" />
        Universal Cloud Hosting
      </header>

      <section class="hero">
        <h1>Welcome to Universal Cloud </h1>
        <p>Your destination for game hosting, powerful servers, developer hiring, and more. Stay updated with the latest
          offers and announcements!</p>
        <button>View Plans </button>
      </section>

      <section class="section">
        <h2 class="section-title">Latest Announcements</h2>
        <div class="cards">
          <div class="card">
            <img src="/img/logo.png" alt="Announcement 1" />
            <h3>New Minecraft Server Locations!</h3>
            <p>We're expanding! Check out our new low-latency server options in Europe and Asia. More speed, less lag.</p>
          </div>
          <div class="card">
            <img src="/img/logo.png" alt="Announcement 2" />
            <h3>Spring Sale 50% OFF</h3>
            <p>All VPS and domain packages are 50% off till the end of this month. Don't miss out!</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Community Stats</h2>
        <div class="stats">
          <div class="stat">
            <h2>150+</h2>
            <p>Total Users</p>
          </div>
          <div class="stat">
            <h2>120+</h2>
            <p>Total Servers</p>
          </div>
          <div class="stat">
            <h2>5+</h2>
            <p>Developers Hired</p>
          </div>
        </div>
      </section>

      <section class="words">
        <h2 class="section-title">Words from Staff</h2>
        <div class="wordsfrompeople">
          <div class="founder">
            <h3>Aryan (Founder)</h3>
            <p>"As the founder of this server hosting platform, I'm incredibly proud of the service we’ve built. Our goal
              has always been to provide top-tier performance, reliability, and unmatched customer support for Minecraft
              server owners. We’ve worked tirelessly to ensure that our platform delivers exactly what gamers need—whether
              that’s uptime, speed, or seamless functionality. Our team’s commitment to innovation and customer satisfaction
              is what truly makes us stand out. I’m excited for the future and the new opportunities we can bring to our
              community."</p>
          </div>
          <div class="ceo">
            <h3>Arjun (CEO)</h3>
            <p>"Being the CEO of this platform is an exciting challenge, and I'm honored to lead a company that’s driven by
              passion and commitment. Our platform is designed to be as reliable and efficient as possible, ensuring that
              each Minecraft server hosted with us runs flawlessly. I believe the key to our success lies in our relentless
              focus on customer service and performance. As we continue to scale, I’m confident that we will remain at the
              forefront of the Minecraft hosting industry, helping our clients build the best experiences for their
              communities."</p>
          </div>
          <div class="developer">
            <h3>Agrim (Web Developer)</h3>
            <p>"As the website developer, my role is to ensure that our users have the best possible experience when
              managing their Minecraft servers. I’ve worked hard to build an intuitive, user-friendly platform that makes it
              easy for our clients to navigate, customize their settings, and get the support they need. Seeing how our
              users interact with the site and the positive feedback we receive drives me to continually enhance its
              functionality. I’m proud of the work we’ve done, and I’m always looking for ways to improve the overall user
              experience."</p>
          </div>
        </div>
      </section>

      <section class="newsletter">
        <h2 class="section-title">Subscribe for Updates</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>

      <section class="socials">
        <h2 class="section-title">Follow Us</h2>
        <div class="social-icons">
          <a href="#">Facebook</a>
          <a href="https://discord.gg/azhGvJGQp8" target="_blank">Discord</a>
          <a href="#">X</a>
          <a href="#">Instagram</a>
        </div>
      </section>

      <nav class="bottom-nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to={`/profile/${auth.currentUser.uid}`}>Profile</NavLink>
        <NavLink to="/pay">Payment</NavLink>
        <NavLink to="/staffapply">Staff Apply</NavLink>
        <a href="https://panel.universalcloud.com/" target="_blank">Pterodactyl Panel</a>
      </nav>
    </div>
  )
}

export default Home;