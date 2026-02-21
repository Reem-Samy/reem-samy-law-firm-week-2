import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">
        “{props.text}”
      </p>

      <div className="testimonial-author">
        {props.author}
      </div>
    </div>
  );
};

export default TestimonialCard;