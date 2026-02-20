import "./StatCard.css";

const StatCard = (props) => {
  return (
    <div className="stat-card">
      <div className="stat-card-value">{props.value}</div>
      <div className="stat-card-label">{props.label}</div>
    </div>
  );
};

export default StatCard;