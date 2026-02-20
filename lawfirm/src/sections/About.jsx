import "./About.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import secImg from "../assets/images/Vector.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-left">
          <Tag text="About" />

          <SectionTitle
            title="A modern firm with classic values"
            subtitle="We combine deep legal expertise with a business-first mindset. Our approach is structured, transparent, and outcomes-driven."
          />
        </div>

        <div className="about-right">
          <div className="about-photo">
            <img className="about-photo-img" src={secImg} alt="Office meeting room" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;