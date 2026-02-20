import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">AURELIUS LAW</div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#practice">Practice Areas</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-primary">Free Consult</button>

          <button className="theme-toggle" onClick={toggleTheme}>
            ☀
          </button>

          <div className="menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;