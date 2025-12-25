import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Companies from "@/components/Companies";
import TrustedCompanies from "@/components/trustedCompanies";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustedCompanies />
        <Testimonials />
        <Companies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
