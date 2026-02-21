import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">AURELIUS LAW</div>
          <div className="footer-copy">
            © 2026. All rights reserved.
          </div>
        </div>

        <div className="footer-right">
          <a href="#">Privacy</a>
          <span>•</span>
          <a href="#">Terms</a>
          <span>•</span>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;