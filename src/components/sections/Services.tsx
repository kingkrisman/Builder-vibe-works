import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FadeInUp,
  FadeInRight,
  FadeInLeft,
} from "@/components/animations/ScrollAnimations";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code,
  Smartphone,
  Tv,
  Wrench,
  Palette,
  Server,
} from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    link: "/services/software-development",
    delay: 0,
  },
  {
    icon: <Tv className="h-10 w-10" />,
    title: "Video Editing",
    description:
      "Professional video editing services for all your media needs.",
    link: "/services/video-editing",
    delay: 0.1,
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "App Development",
    description: "Cross-platform mobile apps that drive user engagement.",
    link: "/services/app-development",
    delay: 0.2,
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: "Phone Repair",
    description: "Fast and reliable repair services for all phone brands.",
    link: "/services/phone-repair",
    delay: 0.3,
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Graphic Design",
    description: "Eye-catching visuals that boost your brand identity.",
    link: "/services/graphic-design",
    delay: 0.4,
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "ICT Services",
    description: "Comprehensive IT solutions for businesses of all sizes.",
    link: "/services/ict-services",
    delay: 0.5,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <FadeInUp
            as="h2"
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Our Services
          </FadeInUp>
          <FadeInUp delay={0.1} className="mx-auto max-w-2xl">
            <p className="text-muted-foreground text-lg">
              We offer a wide range of technology services to help your business
              thrive in the digital world.
            </p>
          </FadeInUp>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeInUp
              key={service.title}
              delay={service.delay}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                {service.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>

              <p className="mb-6 text-muted-foreground">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>

              {/* Decorative animated element */}
              <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-1/2 translate-y-1/2 transform rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-150"></div>
            </FadeInUp>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl bg-primary p-8 text-primary-foreground">
          <FadeInLeft className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-primary-foreground/90">
              Contact us to discuss your specific requirements and get a
              tailored solution for your business.
            </p>
          </FadeInLeft>

          <FadeInRight className="flex-shrink-0">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default Services;
