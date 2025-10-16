import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '9779825290834';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience professional cleaning and maintenance services? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover-lift">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+977 9825290834</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover-lift">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@towntaskers.com</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover-lift">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Birgunj, Nepal</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover-lift">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">Quick Response Guaranteed</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open(whatsappUrl, '_self')}
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
