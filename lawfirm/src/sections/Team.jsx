import "./Team.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import TeamCard from "../components/ui/TeamCard";

import ahmed from "../assets/images/ahmed.png";
import omar from "../assets/images/omar.png";
import mariam from "../assets/images/mariam.png";
import youssef from "../assets/images/youssef.png";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container team-container">
        <Tag text="Our Team" />

        <SectionTitle title="Meet the attorneys" />

        <div className="team-grid">
          <TeamCard
            image={ahmed}
            name="Ahmed El-Sherif"
            role="Managing Partner — Corporate & Commercial Law"
          />

          <TeamCard
            image={mariam}
            name="Omar Abdelrahman"
            role="Litigation Attorney — Civil & Criminal Disputes"
          />

          <TeamCard
            image={omar}
            name="Mariam Hassan"
            role="Senior Associate — Employment & Labor Law"
          />

          <TeamCard
            image={youssef}
            name="Youssef El-Naggar"
            role="Associate — Contracts & Real Estate Law"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;