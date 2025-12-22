import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Building2,
  Home,
  Bath,
  Paintbrush,
  Wind,
} from "lucide-react";
import waterTankImg from "@/assets/water-tank.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpg";
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import kitchenCleaningImg from "@/assets/young-woman-cleaning-kitchen-furniture-rubber-gloves.jpg";
import galaichaImg from "@/assets/people-housework-housekeeping-concept-close-up-woman-with-legs-vacuum-cleaner-cleaning-carpet-home.jpg";
import carpetImg from "@/assets/man-doing-household-tasks.jpg";
import sofaImg from "@/assets/lifestyle-house-decoration-home-white.jpg";
import tileImg from "@/assets/woman-cleaning-shower-wall.jpg";

const services = [
  {
    icon: Droplets,
    title: "Water Tank Cleaning",
    description:
      "From homes to offices, deep cleaning to regular upkeep — our trained cleaners ensure every corner shines with hygiene and freshness.",
    image: waterTankImg,
  },
  {
    icon: Building2,
    title: "Office General and Deep Cleaning",
    description:
      "From homes to offices, deep cleaning to regular upkeep — our trained cleaners ensure every corner shines with hygiene and freshness.",
    image: officeCleaningImg,
  },
  {
    icon: Home,
    title: "Flat General and Deep Cleaning",
    description:
      "Complete room-to-room cleaning including dusting, mopping, cobweb removal, and trash disposal.",
    image: houseCleaningImg,
  },
  {
    icon: Bath,
    title: "Kitchen Deep Cleaning",
    description:
      "We tackle stubborn stains, remove odor, and disinfect surfaces to give you a sparkling, sanitized kitchen.",
    image: kitchenCleaningImg,
  },
  {
    icon: Wind,
    title: "Galaicha Cleaning ",
    description:
      "Let our expert team transform your galaicha from tired and dull to fresh, inviting, and hygienically clean.",
    image: galaichaImg,
  },
  {
    icon: Paintbrush,
    title: "Carpet Cleaning",
    description:
      "We make dirty carpets disappear, restoring the beauty and hygiene of your home.",
    image: carpetImg,
  },
  {
    icon: Wind,
    title: "Sofa Cleaning",
    description:
      "Our expert deep cleaning service removes dirt, spots, and odors at the molecular level, ensuring a healthier living space.",
    image: sofaImg,
  },
  {
    icon: Paintbrush,
    title: "Tile Cleaning",
    description:
      "We restore your floors to their original glory! Safe, effective, and hassle-free cleaning.",
    image: tileImg,
  },
];

const Services = () => {
  const whatsappNumber = "9779825290834";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning and maintenance solutions tailored to your
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-lift bg-card border-border shadow-[var(--shadow-card)] overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <Button
                    onClick={() => window.open(whatsappUrl, "_self")}
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
