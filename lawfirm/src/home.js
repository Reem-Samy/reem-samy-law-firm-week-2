import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import VisionMission from "./sections/VisionMission";
import PracticeAreas from "./sections/PracticeAreas";
// import WhyUs from "./Sections/WhyUs";
// import Team from "./Sections/Team";
// import Testimonials from "./Sections/Testimonials";
// import FAQ from "./Sections/FAQ";
// import Contact from "./Sections/Contact";
// import Footer from "./components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <PracticeAreas />
      {/* <WhyUs />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default Home;