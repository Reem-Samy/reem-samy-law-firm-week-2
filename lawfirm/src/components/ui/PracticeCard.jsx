import "./PracticeCard.css";
import Button from "./Button";

const PracticeCard = (props) => {
  return (
    <div className="practice-card">
      <div className="practice-card-top">
        <div className="practice-card-icon">
          <img src={props.icon} alt={props.title} />
        </div>

        <h3 className="practice-card-title">{props.title}</h3>
      </div>

      <p className="practice-card-desc">{props.description}</p>

      <div className="practice-card-action">
        <Button text={props.buttonText} variant="outline" />
      </div>
    </div>
  );
};

export default PracticeCard;