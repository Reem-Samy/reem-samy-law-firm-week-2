import "./FAQ.css";
import Tag from "../components/ui/Tag";
import SectionTitle from "../components/ui/SectionTitle";
import FaqItem from "../components/ui/FaqItem";

const FAQ = () => {
  return (
    <section className="faq" id="faq">
      <div className="container faq-container">
        <Tag text="FAQ" />

        <SectionTitle title="Common questions" />

        <div className="faq-list">
          <FaqItem
            question="What documents are required to start a corporate case?"
            answer="Typically, corporate registration documents, contracts involved in the dispute, official correspondence, and any supporting financial records are required to properly assess and initiate the case."
          />

          <FaqItem
            question="How long does a litigation case usually take?"
            answer="The duration depends on the complexity of the case, court schedules, and evidence involved. Some cases resolve within months, while others may take longer if appeals or additional proceedings are required."
          />

          <FaqItem
            question="Can you review and draft commercial contracts for my business?"
            answer="Yes. We draft, review, and negotiate commercial agreements to ensure legal protection, regulatory compliance, and minimized risk exposure for your business operations."
          />

          <FaqItem
            question="What should I do if I receive a legal notice?"
            answer="Do not ignore the notice. Contact a legal professional immediately, provide all relevant documentation, and avoid responding formally before receiving proper legal guidance."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;