import "./TeamCard.css";
import Button from "./Button";

const TeamCard = (props) => {
  return (
    <div className="team-card">
      <div className="team-image-wrapper">
        <img
          className="team-image"
          src={props.image}
          alt={props.name}
        />
      </div>

      <div className="team-content">
        <h3 className="team-name">{props.name}</h3>

        <p className="team-role">{props.role}</p>

        <Button text="Contact" variant="outline" />
      </div>
    </div>
  );
};

export default TeamCard;