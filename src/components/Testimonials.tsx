import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "../lib/testimonials";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <Card className="flex-shrink-0 w-80 bg-card hover:shadow-elegant transition-all duration-300 border-border/50">
    <CardContent className="p-6">
      <Quote className="w-8 h-8 text-primary/30 mb-4" />

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      <p className="font-body text-muted-foreground text-sm mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>

      <div className="border-t border-border/50 pt-4 flex items-center gap-3 rounded-full">
        <img
          src={testimonial.path}
          className="w-12 h-12 bg-primary/10 rounded-full object-cover"
        />
        <div>
          <p className="font-heading font-semibold text-foreground">
            {testimonial.name}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hear From Our Clients
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — see what our satisfied customers
            have to say about our services.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee w-max">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
