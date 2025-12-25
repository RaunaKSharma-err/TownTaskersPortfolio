import { Building2 } from "lucide-react";
import { testimonials } from "../lib/testimonials";

const TrustedCompanies = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Trusted By Leading Companies
          </h2>
          <p className="font-body text-muted-foreground">
            We're proud to serve these amazing organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-3 p-6 bg-muted/30 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 group"
            >
              <Building2 className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
              <span className="font-heading font-medium text-foreground group-hover:text-muted-foreground transition-colors text-[8px] md:text-base">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
