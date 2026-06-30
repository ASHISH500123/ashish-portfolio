import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          I am Ashish Kumar Sharma, a BCA student passionate about Full Stack
          Web Development using the MERN Stack. I enjoy building modern,
          responsive, and scalable web applications.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>BCA - Arka Jain University</p>
          </div>

          <div className="about-card">
            <h3>💻 Experience</h3>
            <p>Full Stack MERN Projects</p>
          </div>

          <div className="about-card">
            <h3>📍 Location</h3>
            <p>Jamshedpur, Jharkhand, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;