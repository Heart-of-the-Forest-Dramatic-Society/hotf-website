import Footer from "@/components/footer";
import Navbar from "@/components/navbar-wrapper";
import AboutUsSection from "@/components/about-section";

const About = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <AboutUsSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
