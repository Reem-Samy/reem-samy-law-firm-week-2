import "./VisionMission.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import VisionMissionCard from "../components/ui/VisionMissionCard";

const VisionMission = () => {
  return (
    <section className="vision-mission" id="vision">
      <div className="container vm-container">
        <Tag text="Vision & Mission" />

        <SectionTitle
          title="Clarity, fairness, and confidence"
        />

        <div className="vm-grid">
          <VisionMissionCard
            title="Vision"
            text="To be the most trusted legal partner for long-term success."
          />

          <VisionMissionCard
            title="Mission"
            text="Deliver measurable results through strategy, rigor, and ethics."
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;