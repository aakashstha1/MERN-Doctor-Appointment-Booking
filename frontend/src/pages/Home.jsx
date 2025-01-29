import Hero from "../components/Hero/Hero";
import ServiceSection1 from "../components/Services/ServiceSection1";
import About from "../components/About/About";
import ServiceSection2 from "../components/Services/ServiceSection2";
import Feature from "../components/Features/Feature";
import FaqList from "../components/FAQ/FaqList";
import OurGreatDoctors from "../components/Doctors/OurGreatDoctors";
function Home() {
  return (
    <>
      <Hero />
      <ServiceSection1 />
      <About />
      <ServiceSection2 />
      <Feature />
      <OurGreatDoctors />
      <FaqList />
    </>
  );
}

export default Home;
