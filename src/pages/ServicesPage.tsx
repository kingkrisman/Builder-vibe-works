import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeInUp } from "@/components/animations/ScrollAnimations";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/cards/ServiceCard";
import services, { otherServices } from "@/data/services";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
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
              Our Services
            </Badge>
            <FadeInUp
              as="h1"
              className="mb-6 max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Comprehensive{" "}
              <span className="text-primary">Technology Solutions</span>
            </FadeInUp>
            <FadeInUp
              delay={0.1}
              className="mb-8 max-w-2xl text-lg text-muted-foreground"
            >
              From software development to graphic design, we offer a wide range
              of services to help you leverage technology for business success.
            </FadeInUp>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Core Services
              </h2>
              <p className="text-muted-foreground text-lg mx-auto max-w-2xl">
                Explore our primary offerings designed to address your
                technology needs with expertise and innovation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  icon={<service.icon className="h-10 w-10" />}
                  title={service.title}
                  description={service.shortDescription}
                  link={`/services/${service.id}`}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Additional Services
              </h2>
              <p className="text-muted-foreground text-lg mx-auto max-w-2xl">
                We offer a range of complementary services to provide
                comprehensive solutions for all your technology needs.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((service, index) => (
                <FadeInUp
                  key={service.id}
                  delay={index * 0.1}
                  className="flex items-start gap-4 rounded-lg border bg-background p-6"
                >
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="rounded-xl bg-primary p-10 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-primary-foreground/90 mb-8 mx-auto max-w-2xl">
                Contact us today to discuss your project requirements and learn
                how our services can help your business grow.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
