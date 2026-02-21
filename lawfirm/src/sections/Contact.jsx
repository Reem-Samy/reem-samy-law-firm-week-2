import "./Contact.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted successfully");
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <Tag text="Contact" />

        <SectionTitle
          title="Request a consultation"
          subtitle="Fill out the form and we’ll get back within 24 hours."
        />

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="form-field">
                <label className="form-label">Full Name</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-field">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" />
              </div>

              <div className="form-field">
                <label className="form-label">Phone</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-field">
                <label className="form-label">Subject</label>
                <input className="form-control" type="text" />
              </div>

              <div className="form-field full">
                <label className="form-label">Message</label>
                <textarea className="form-control textarea" rows="6" />
              </div>
            </div>

            <Button text="Submit" variant="primary" type="submit" />
          </form>

          <div className="contact-info">
            <div className="info-block">
              <div className="info-title">Office</div>
              <div className="info-text">Cairo, Egypt (Placeholder)</div>
            </div>

            <div className="info-block">
              <div className="info-title">Phone</div>
              <div className="info-text">+20 000 000 000</div>
            </div>

            <div className="info-block">
              <div className="info-title">Email</div>
              <div className="info-text">hello@aureliuslaw.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;