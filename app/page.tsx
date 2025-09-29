import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import TicketsSection from "@/components/ticket-section";

const Home = async () => {
  return (
    <div className="h-screen">
      {/* Home View */}
      <div className="flex flex-col items-center">
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Tickets Section */}
        <TicketsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
