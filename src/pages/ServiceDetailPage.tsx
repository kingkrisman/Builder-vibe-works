import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "@/components/animations/ScrollAnimations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import services, { Service } from "@/data/services";
import NotFound from "./NotFound";

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Find the service by ID
    const foundService = services.find((s) => s.id === serviceId);

    if (foundService) {
      setService(foundService);
      setNotFound(false);
    } else {
      setNotFound(true);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (notFound) {
    return <NotFound />;
  }

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 text-primary mx-auto mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                  className="opacity-75"
                />
              </svg>
            </div>
            <p className="text-muted-foreground">Loading service details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-muted/30 pt-24 md:pt-28">
          <div className="container pb-20">
            <div className="flex flex-col items-center text-center">
              <Badge className="mb-4" variant="outline">
                Our Services
              </Badge>
              <FadeInUp
                as="h1"
                className="mb-6 max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl"
              >
                {service.title}
              </FadeInUp>
              <FadeInUp
                delay={0.1}
                className="mb-8 max-w-2xl text-lg text-muted-foreground"
              >
                {service.shortDescription}
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <FadeInLeft className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </FadeInLeft>

              <div>
                <FadeInRight
                  as="h2"
                  className="text-3xl font-bold tracking-tight mb-6"
                >
                  Overview
                </FadeInRight>
                <FadeInRight delay={0.1} className="text-muted-foreground mb-8">
                  <p className="mb-4">{service.fullDescription}</p>
                </FadeInRight>

                <FadeInRight delay={0.2}>
                  <Button asChild>
                    <Link to="/contact">
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </FadeInRight>
              </div>
            </div>
          </div>
        </section>

        {/* Features and Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Features */}
              <FadeInUp>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInUp>

              {/* Benefits */}
              <FadeInUp delay={0.2}>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Case Studies Section (if available) */}
        {service.caseStudies && service.caseStudies.length > 0 && (
          <section className="py-20">
            <div className="container">
              <div className="text-center mb-16">
                <FadeInUp
                  as="h2"
                  className="text-3xl font-bold tracking-tight mb-4"
                >
                  Case Studies
                </FadeInUp>
                <FadeInUp delay={0.1} className="mx-auto max-w-2xl">
                  <p className="text-muted-foreground text-lg">
                    Real-world examples of how our {service.title.toLowerCase()}{" "}
                    solutions have helped clients achieve their goals.
                  </p>
                </FadeInUp>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {service.caseStudies.map((caseStudy, index) => (
                  <FadeInUp
                    key={index}
                    delay={index * 0.1}
                    className="rounded-lg border bg-background p-8 shadow-sm"
                  >
                    <h3 className="text-xl font-bold mb-4">
                      {caseStudy.title}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Challenge & Solution
                      </h4>
                      <p>{caseStudy.description}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Results
                      </h4>
                      <p className="text-primary font-medium">
                        {caseStudy.results}
                      </p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="rounded-xl bg-primary p-10 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-primary-foreground/90 mb-8 mx-auto max-w-2xl">
                Contact us today to discuss your {service.title.toLowerCase()}{" "}
                needs and learn how we can help your business succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" /> View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
