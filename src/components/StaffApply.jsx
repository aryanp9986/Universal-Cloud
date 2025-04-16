import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./staffapply.css";
import { auth, db } from "../firebase";

const StaffApply = () => {
  document.title = "Staff Apply | Universal Cloud";

  const [name, setName] = useState("");
  const [email, setEmail] = useState(auth.currentUser.email);
  const [discordUsername, setDiscordUsername] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [briefDescription, setBriefDescription] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [country, setCountry] = useState("");
  const [availability, setAvailibility] = useState("");
  const [preferredCommunicationMethod, setPreferredCommunicationMethod] = useState("");
  const [aimToJoin, setAimToJoin] = useState("");
  const [sampleFileLink, setSampleFileLink] = useState([]);

  const sumbitApplication = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email || !discordUsername || !specialty || !portfolioLink || !country || !availability || !preferredCommunicationMethod || !aimToJoin || !sampleFileLink) {
        alert("Please fill all the fields!");
      } else {
        await db.collection("staffapplications").add({
          name,
          email,
          discord_username: discordUsername,
          specialty,
          portfolio_link: portfolioLink,
          country, availability,
          preferred_communication_method: preferredCommunicationMethod,
          aim_to_join: aimToJoin,
          sample_file_link: sampleFileLink
        })
      }
    } catch (error) {
      alert(e.message);
      console.log(e);

    }
  }
  return (
    <div className="sapply sapply-body">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <NavLink to="/home" className="back-button">&larr; Back</NavLink>
        <div className="neon-box">
          <h1 className="neon-title">Developer Application Form</h1>
          <form action="submit.php" method="POST" enctype="multipart/form-data">
            <input type="text" name="name" placeholder="Full Name" className="neon-input" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" name="email" placeholder="Email Address" className="neon-input" value={email} disabled />
            <input type="text" name="discord" placeholder="Discord Username (e.g. dev#0001)" className="neon-input" value={discordUsername} onChange={(e) => setDiscordUsername(e.target.value)} />
            <select
              name="role" className="neon-select" onChange={(e) => setSpecialty(e.target.value)} required>
              <option value="">Select Your Specialty</option>
              <option value="plugin">Minecraft Plugin Developer</option>
              <option value="web">Web UI/UX Designer</option>
              <option value="backend">Backend Infrastructure Dev</option>
              <option value="fullstack">Full Stack Game Developer</option>
            </select>

            <textarea name="experience" rows="4" placeholder="Briefly describe your experience and skills..." className="neon-textarea" value={briefDescription} onChange={(e) => setBriefDescription(e.target.value)} required></textarea>
            <textarea name="portfolio" rows="3" placeholder="Link to portfolio, GitHub, or past work..." className="neon-textarea" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)}></textarea>

            <input type="text" name="location" placeholder="Your Country/Timezone" className="neon-input" value={country} onChange={(e) => setCountry(e.target.value)} required />
            <input type="text" name="availability" placeholder="Availability (e.g. Weekends, Evenings)" className="neon-input" value={availability} onChange={(e) => setAvailibility(e.target.value)} required />

            <select name="communication" className="neon-select" onChange={(e) => setPreferredCommunicationMethod(e.target.value)} required>
              <option value="">Preferred Communication Method</option>
              <option value="discord">Discord</option>
              <option value="email">Email</option>
              <option value="zoom">Zoom/Google Meet</option>
            </select>

            <textarea name="motivation" rows="3" placeholder="Why do you want to join our team?" className="neon-textarea" value={aimToJoin} onChange={(e) => setAimToJoin(e.target.value)} required></textarea>

            <label className="text-sm text-cyan-300 mb-1 block">Upload Sample (PDF, DOCX, ZIP)</label>
            <input type="file" name="attachment" className="neon-file" accept=".pdf,.doc,.docx,.zip" value={sampleFileLink[0]} onChange={(e) => setSampleFileLink(e.target.files[0])} />

            {/* <!-- Honeypot Field for Anti-Spam --> */}
            <input type="text" name="website" className="hidden-field" tabindex="-1" autocomplete="off" />

            <button type="submit" className="submit-btn" onClick={(e) => sumbitApplication(e)}>Submit Application</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default StaffApply;