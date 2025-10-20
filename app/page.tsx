import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar-wrapper";
import TicketsSection from "@/components/ticket-section";

const Home = async () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex flex-col">
          {/* Hero Section - Full viewport height minus navbar */}
          <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
            <HeroSection />
          </section>

          {/* Tickets Section */}
          <section
            id="tickets"
            aria-label="Tickets"
            className="py-16 sm:py-20 lg:py-24"
          >
            <TicketsSection />
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            aria-label="Contact"
            className="py-16 sm:py-20 lg:py-24"
          >
            <ContactSection />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
