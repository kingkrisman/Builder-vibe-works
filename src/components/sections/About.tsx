import {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "@/components/animations/ScrollAnimations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Target, Users } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "500+",
    label: "Happy Clients",
    delay: 0,
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "50+",
    label: "Awards Won",
    delay: 0.1,
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "10+",
    label: "Years of Experience",
    delay: 0.2,
  },
  {
    icon: <Target className="h-6 w-6" />,
    value: "1000+",
    label: "Completed Projects",
    delay: 0.3,
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/5"
          style={{ y }}
        />
        <motion.div
          className="absolute -left-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-primary/5"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />
      </div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - About Info */}
          <div>
            <FadeInLeft
              as="h2"
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
            >
              About Daniels Network
            </FadeInLeft>

            <FadeInLeft delay={0.1}>
              <p className="text-muted-foreground mb-4">
                Founded in 2014, Daniels Network has been at the forefront of
                technology innovation, providing comprehensive digital solutions
                to businesses across various industries.
              </p>

              <p className="text-muted-foreground mb-6">
                Our team of experts brings together diverse skills and
                experiences to deliver exceptional results for our clients. We
                pride ourselves on our customer-centric approach and our
                commitment to quality and innovation.
              </p>

              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To empower businesses with cutting-edge technology solutions
                that drive growth, efficiency, and innovation in an
                ever-evolving digital landscape.
              </p>

              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To be the leading technology partner for businesses worldwide,
                known for our expertise, reliability, and innovative solutions.
              </p>

              <Button asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeInLeft>
          </div>

          {/* Right Column - Image & Stats */}
          <div>
            <FadeInRight className="mb-12 overflow-hidden rounded-lg shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Daniels Network Team"
                className="w-full h-auto object-cover"
              />
            </FadeInRight>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <FadeInUp
                  key={stat.label}
                  delay={stat.delay}
                  className="flex flex-col items-center rounded-lg bg-muted p-6 text-center"
                >
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-bold">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
