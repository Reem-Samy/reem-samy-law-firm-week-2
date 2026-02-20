import "./SectionTitle.css";

const SectionTitle = (props) => {
  return (
    <div className="section-title">
      <h2 className="section-title-heading">
        {props.title}
      </h2>

      {props.subtitle && (
        <p className="section-title-subtitle">
          {props.subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;