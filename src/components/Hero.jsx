function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <img src="/profile.jpeg" alt="Ashish Kumar Sharma" className="profile-img" />

        <h1>Hi, I'm <span>Ashish Kumar Sharma</span></h1>

        <h2>Full Stack MERN Developer</h2>

        <p>
          I build scalable, responsive and user-friendly web applications using
          React, Node.js, Express.js, and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn">Hire Me</a>
          <a href="#projects" className="btn-outline">View Projects</a>
        </div>

      </div>
    </section>
  );
}

export default Hero;