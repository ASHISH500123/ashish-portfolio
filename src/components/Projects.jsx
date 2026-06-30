import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Banking Application",
      image: "/images/banking.png",
      description:
        "A full-stack banking application with secure user authentication, account management, deposits, withdrawals, fund transfers, and transaction history.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/your-github-username/banking-application",
      live: "https://your-banking-app.vercel.app",
    },
    {
      title: "Personal Portfolio",
      image: "/images/portfolio.png",
      description:
        "A responsive personal portfolio website showcasing my skills, education, certifications, projects, and contact information.",
      technologies: ["React", "Vite", "CSS"],
      github: "https://github.com/your-github-username/portfolio",
      live: "https://your-portfolio.vercel.app",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* IMAGE FIXED */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/500x300?text=Image+Not+Found";
              }}
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;