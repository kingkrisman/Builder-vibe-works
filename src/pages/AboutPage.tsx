import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "@/components/animations/ScrollAnimations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Check,
  Clock,
  Download,
  MapPin,
  Target,
  Users,
} from "lucide-react";

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

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-muted/30 pt-24 md:pt-28">
          <div className="container flex flex-col items-center pb-20 text-center">
            <Badge className="mb-4" variant="outline">
              About Us
            </Badge>
            <FadeInUp
              as="h1"
              className="mb-6 max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              We Are <span className="text-primary">Daniels Network</span>
            </FadeInUp>
            <FadeInUp
              delay={0.1}
              className="mb-8 max-w-2xl text-lg text-muted-foreground"
            >
              A team of passionate tech experts dedicated to helping businesses
              and individuals harness the power of technology to achieve their
              goals.
            </FadeInUp>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <FadeInLeft className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Faffc3eb283ac4040a45075a566b2d225"
                  alt="Daniels Network Team"
                  className="w-full h-auto object-cover"
                />
              </FadeInLeft>

              <div>
                <FadeInRight
                  as="h2"
                  className="text-3xl font-bold tracking-tight mb-6"
                >
                  Our Story
                </FadeInRight>
                <FadeInRight delay={0.1}>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2014 by Daniel Johnson, Daniels Network began as
                    a small IT consulting firm with a vision to make technology
                    accessible and beneficial for businesses of all sizes.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    What started as a one-person operation has grown into a
                    comprehensive technology company with a team of over 30
                    experts across software development, design, media
                    production, and IT services.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Throughout our journey, we've maintained our commitment to
                    quality, innovation, and client satisfaction. Our growth has
                    been driven by our ability to adapt to changing technologies
                    while consistently delivering exceptional results for our
                    clients.
                  </p>

                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <Link to="/contact">
                      <Download className="h-4 w-4" /> Download Company Profile
                    </Link>
                  </Button>
                </FadeInRight>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <FadeInUp
              as="h2"
              className="text-3xl font-bold tracking-tight text-center mb-16"
            >
              Our Mission & Vision
            </FadeInUp>

            <div className="grid gap-10 md:grid-cols-2">
              <FadeInLeft className="rounded-lg border bg-background p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth, efficiency, and innovation in an
                  ever-evolving digital landscape.
                </p>
                <ul className="space-y-3">
                  {[
                    "Deliver high-quality, tailored solutions",
                    "Provide excellent service and support",
                    "Foster long-term client relationships",
                    "Stay at the forefront of technology trends",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInLeft>

              <FadeInRight className="rounded-lg border bg-background p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground mb-6">
                  To be the leading technology partner for businesses worldwide,
                  known for our expertise, reliability, and innovative
                  solutions.
                </p>
                <ul className="space-y-3">
                  {[
                    "Be recognized as industry leaders",
                    "Create meaningful technological impact",
                    "Build a diverse, skilled, and passionate team",
                    "Contribute to technological advancement globally",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInRight>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <FadeInUp
                  key={stat.label}
                  delay={stat.delay}
                  className="flex flex-col items-center rounded-lg bg-background p-8 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <h4 className="text-4xl font-bold mb-2">{stat.value}</h4>
                  <p className="text-muted-foreground">{stat.label}</p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <FadeInUp
                as="h2"
                className="text-3xl font-bold tracking-tight mb-4"
              >
                Our Location
              </FadeInUp>
              <FadeInUp delay={0.1} className="mx-auto max-w-2xl">
                <p className="text-muted-foreground text-lg">
                  Visit our headquarters or contact us to learn more about our
                  services.
                </p>
              </FadeInUp>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              <FadeInLeft>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Headquarters
                      </h3>
                      <p className="text-muted-foreground">
                        123 Tech Street, Silicon Valley
                        <br />
                        CA 94043, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 6PM
                        <br />
                        Saturday: 10AM - 2PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button size="lg" asChild>
                      <Link to="/contact">
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeInLeft>

              <FadeInRight className="rounded-xl overflow-hidden h-80 md:h-96">
                {/* Placeholder for Google Maps */}
                <div className="bg-muted h-full w-full flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    Google Maps will be embedded here
                  </span>
                </div>
              </FadeInRight>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
