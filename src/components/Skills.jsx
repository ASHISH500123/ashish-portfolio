import "../styles/Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;