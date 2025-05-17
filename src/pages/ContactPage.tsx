import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { FadeInUp } from "@/components/animations/ScrollAnimations";
import { Badge } from "@/components/ui/badge";

const ContactPage = () => {
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
              Contact Us
            </Badge>
            <FadeInUp
              as="h1"
              className="mb-6 max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl"
            >
              Let's <span className="text-primary">Talk</span>
            </FadeInUp>
            <FadeInUp
              delay={0.1}
              className="mb-8 max-w-2xl text-lg text-muted-foreground"
            >
              Have a question or ready to start your project? Reach out to our
              team and let's discuss how we can help you achieve your goals.
            </FadeInUp>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
