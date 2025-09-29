import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutUsSection from "@/components/about-section";

const About = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center">
        <Navbar />

        <AboutUsSection />

        <Footer />
      </div>
    </div>
  );
};

export default About;
