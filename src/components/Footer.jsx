import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Ashish Kumar Sharma</h2>

      <p>Full Stack MERN Developer</p>

      <div className="footer-links">
        <a href="ashishsharma620231@gmail.com">Email</a>
        <a href="https://github.com/ASHISH500123" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ashish-sharma-806bb225b" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <p className="copyright">
        ashishsharma620231@gmail.com. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;