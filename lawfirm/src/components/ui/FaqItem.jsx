import "./FaqItem.css";

const FaqItem = (props) => {
  return (
    <div className="faq-item">
      <div className="faq-question">
        <span>{props.question}</span>
        <span className="faq-icon">+</span>
      </div>
    </div>
  );
};

export default FaqItem;