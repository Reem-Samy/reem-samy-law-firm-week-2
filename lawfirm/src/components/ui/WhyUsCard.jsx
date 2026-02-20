import "./WhyUsCard.css";

const WhyUsCard = (props) => {
  return (
    <div className="whyus-card">
      <div className="whyus-icon">
        <img src={props.icon} alt={props.title} />
      </div>

      <h3 className="whyus-title">{props.title}</h3>

      <p className="whyus-desc">{props.description}</p>
    </div>
  );
};

export default WhyUsCard;