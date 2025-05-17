import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/animations/ScrollAnimations";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, TechCorp",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "Daniels Network transformed our business with their custom software solution. Their team was professional, responsive, and delivered beyond our expectations. I highly recommend their services to any business looking to leverage technology.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director, InnovateCo",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "The graphic design team at Daniels Network is exceptional. They created a stunning brand identity for our startup, which has significantly improved our market presence. Their creativity and attention to detail are remarkable.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Product Manager, AppSolutions",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "Working with Daniels Network on our mobile app was a fantastic experience. From concept to launch, they guided us through the process and delivered a polished product that our users love. Their technical expertise is truly impressive.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Content Creator",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "The video editing services provided by Daniels Network are top-notch. They transformed my raw footage into professional, engaging content that has significantly increased my online engagement. Quick turnaround times and excellent communication.",
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Small Business Owner",
    image: "/placeholder.svg",
    rating: 4,
    content:
      "I've been relying on Daniels Network for all my IT needs for the past three years. Their team is always available to solve any issues, and their preventive maintenance has kept our systems running smoothly. Great value for the service provided.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | null = null;

    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrent(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <FadeInUp
            as="h2"
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            What Our Clients Say
          </FadeInUp>
          <FadeInUp delay={0.1} className="mx-auto max-w-2xl">
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </FadeInUp>
        </div>

        {/* Testimonial carousel */}
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-card p-8 shadow-lg border"
            >
              <div className="mb-6 flex items-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                  <div className="mt-1 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonials[current].rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                "{testimonials[current].content}"
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="mt-10 flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted"
                  }`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
