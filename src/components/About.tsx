import { CheckCircle2 } from 'lucide-react';

const values = [
  'Professional & Trained Staff',
  'Quality Service Guaranteed',
  'Affordable Pricing',
  'Timely Completion',
  'Customer Satisfaction First',
  'Modern Equipment & Techniques',
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                With years of experience in the cleaning and maintenance industry, we have built a reputation for excellence and reliability. Our team of trained professionals is dedicated to providing top-notch services that exceed customer expectations.
              </p>
              <p className="text-lg">
                We understand that every space is unique, which is why we offer customized solutions tailored to your specific needs. Whether it's a residential property or a commercial establishment, we bring the same level of commitment and attention to detail.
              </p>
              <p className="text-lg">
                Our mission is to create clean, healthy, and well-maintained environments where you can thrive. We combine modern techniques with eco-friendly products to deliver results that last.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
