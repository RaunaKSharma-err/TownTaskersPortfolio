import { Building2, Users, CheckCircle, Clock } from "lucide-react";

const stats = [
  { icon: Building2, value: "20+", label: "Companies Served" },
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: CheckCircle, value: "40+", label: "Projects Completed" },
  { icon: Clock, value: "2+", label: "Years Experience" },
];

const Companies = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <stat.icon className="w-10 h-10 text-primary-foreground/80 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </span>
              <span className="font-body text-primary-foreground/80 text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
