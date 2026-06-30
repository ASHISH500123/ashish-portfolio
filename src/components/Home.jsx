import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2>Hi, I'm</h2>
        <h1>Ashish Kumar Sharma</h1>
        <h2>Full Stack MERN Developer</h2>

        <p>
          I build responsive, user-friendly web applications using React,
          Node.js, Express.js, and MongoDB.
        </p>

        <div className="home-buttons">
          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>

          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src="/profile.jpeg" alt="Ashish Kumar Sharma" />
      </div>
    </section>
  );
}

export default Home;