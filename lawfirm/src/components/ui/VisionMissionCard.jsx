import "./VisionMissionCard.css";

const VisionMissionCard = (props) => {
  return (
    <div className="vm-card">
      <h3 className="vm-card-title">{props.title}</h3>
      <p className="vm-card-text">{props.text}</p>
    </div>
  );
};

export default VisionMissionCard;