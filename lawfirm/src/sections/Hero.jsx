import "./Hero.css";
import heroImg from "../assets/images/Vector-1.png";
import StatCard from "../components/ui/StatCard";
import Button from "../components/ui/Button";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-left">
          <div className="hero-kicker">
            Corporate & Litigation Counsel
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">
              Experience. Trust.
            </span>
            <span className="hero-title-line hero-title-accent">
              Results.
            </span>
          </h1>

          <p className="hero-desc">
            Clear legal strategy for businesses and individuals —
            delivered with precision, confidentiality, and care.
          </p>

          <div className="hero-actions">
            <Button text="Book a Call" variant="primary" />
            <Button text="View Practice Areas" variant="outline" />
          </div>

          <div className="hero-stats">
            <StatCard value="12+" label="Years" />
            <StatCard value="2,450" label="Clients" />
            <StatCard value="98%" label="Success Rate" />
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo">
            <img
              className="hero-photo-img"
              src={heroImg}
              alt="Attorney portrait"
            />
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Hero;