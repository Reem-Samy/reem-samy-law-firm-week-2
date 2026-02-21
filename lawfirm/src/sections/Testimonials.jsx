import "./Testimonials.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import TestimonialCard from "../components/ui/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container testimonials-container">
        <Tag text="Testimonials" />

        <SectionTitle title="What clients say" />

        <div className="testimonials-grid">
          <TestimonialCard
            text="Aurelius Law demonstrated exceptional professionalism and strategic insight throughout our case. Their team handled every detail with precision, kept us informed at every stage, and ultimately delivered results that exceeded our expectations."
            author="Karim Mansour — CEO, NileTech Solutions"
          />

          <TestimonialCard
            text="The firm’s clarity, responsiveness, and depth of legal expertise gave us complete confidence during a complex legal matter. Their client-first approach and structured guidance made the entire process smooth and highly effective."
            author="Salma Fouad — Managing Director, Horizon Developments"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;