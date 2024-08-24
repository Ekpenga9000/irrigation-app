import Hero from "../components/Hero";
import CardListLanding from "../components/CardListLanding";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <section>
      <Hero />
      <CardListLanding />
      <AboutSection/>
      <Testimonials/>
    </section>
  );
};

export default Home;
