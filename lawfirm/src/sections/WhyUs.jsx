import "./WhyUs.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import WhyUsCard from "../components/ui/WhyUsCard";

import Frame from "../assets/icons/Frame.png";
import Frame1 from "../assets/icons/Frame1.png";
import Frame2 from "../assets/icons/Frame2.png";

const WhyUs = () => {
  return (
    <section className="whyus" id="whyus">
      <div className="container whyus-container">
        <Tag text="Why Us" />

        <SectionTitle title="Professional. Minimal. Corporate." />

        <div className="whyus-grid">
          <WhyUsCard
            icon={Frame}
            title="Senior Expertise"
            description="15+ years combined experience across complex cases."
          />

          <WhyUsCard
            icon={Frame1}
            title="Clear Communication"
            description="Transparent steps, timelines, and fees."
          />

          <WhyUsCard
            icon={Frame2}
            title="Client-First Strategy"
            description="Solutions aligned to your goals."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;