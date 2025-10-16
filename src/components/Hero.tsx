import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Clean modern home interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-5 h-5 text-secondary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Professional Cleaning & Maintenance
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Your Trusted Partner for
            <span className="block mt-2 text-secondary-foreground">
              Clean & Maintained Spaces
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            From homes to offices, deep cleaning to regular upkeep — our trained professionals ensure every corner shines with hygiene and freshness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector('#services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">100+</div>
              <div className="text-sm text-primary-foreground/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">8</div>
              <div className="text-sm text-primary-foreground/80">Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
