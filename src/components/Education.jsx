import "../styles/Education.css";

function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Arka Jain University",
      duration: "2023 - 2026",
      cgpa: "8.57 CGPA",
    },
    {
      degree: "Intermediate (12th)",
      college: "XYZ School",
      duration: "2021 - 2023",
      percentage: "68%",
    },
    {
      degree: "Matriculation (10th)",
      college: "XYZ School",
      duration: "2019 - 2021",
      percentage: "75%",
    },
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-container">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <p>{item.college}</p>
            <p>{item.duration}</p>
            <p>{item.cgpa || item.percentage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;