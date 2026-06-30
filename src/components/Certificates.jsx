import "../styles/Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "Full Stack MERN Internship",
      provider: "Ardent Computech Pvt. Ltd.",
      year: "2025",
      image: "/images/internship.jpg",
    },
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certificates</h2>

      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
            />

            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
              <span>{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;