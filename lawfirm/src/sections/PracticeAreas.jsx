import "./PracticeAreas.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import PracticeCard from "../components/ui/PracticeCard";

import rec1 from "../assets/icons/rec1.png";
import rec2 from "../assets/icons/rec2.png";
import rec3 from "../assets/icons/rec3.png";
import rec4 from "../assets/icons/rec4.png";
import rec5 from "../assets/icons/rec5.png";
import rec6 from "../assets/icons/rec6.png";

const PracticeAreas = () => {
  return (
    <section className="practice" id="practice">
      <div className="container practice-container">
        <Tag text="Practice Areas" />

        <SectionTitle title="Focused expertise across key domains" />

        <div className="practice-grid">
          <PracticeCard
            icon={rec1}
            title="Corporate Law"
            description="Strategic counsel for governance, compliance, and growth-focused decisions."
            buttonText="Learn More"
          />

          <PracticeCard
            icon={rec2}
            title="Business Contracts"
            description="Drafting and reviewing contracts to protect your interests and reduce risk."
            buttonText="Learn More"
          />

          <PracticeCard
            icon={rec3}
            title="Litigation"
            description="Strong representation in disputes with a clear, evidence-led strategy."
            buttonText="Learn More"
          />

          <PracticeCard
            icon={rec4}
            title="IP & Media"
            description="Protecting trademarks, copyrights, and digital assets across media channels."
            buttonText="Learn More"
          />

          <PracticeCard
            icon={rec5}
            title="Employment Law"
            description="Workplace policies, employee disputes, and HR compliance handled professionally."
            buttonText="Learn More"
          />

          <PracticeCard
            icon={rec6}
            title="Real Estate"
            description="Property transactions, leases, and legal due diligence from start to finish."
            buttonText="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;