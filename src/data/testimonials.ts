export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  image: string;
  rating: number;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO",
    company: "TechCorp",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "Daniels Network transformed our business with their custom software solution. Their team was professional, responsive, and delivered beyond our expectations. I highly recommend their services to any business looking to leverage technology.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "InnovateCo",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "The graphic design team at Daniels Network is exceptional. They created a stunning brand identity for our startup, which has significantly improved our market presence. Their creativity and attention to detail are remarkable.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Product Manager",
    company: "AppSolutions",
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
    company: "Wilson Retail",
    image: "/placeholder.svg",
    rating: 4,
    content:
      "I've been relying on Daniels Network for all my IT needs for the past three years. Their team is always available to solve any issues, and their preventive maintenance has kept our systems running smoothly. Great value for the service provided.",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "Global Logistics",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "The phone repair service at Daniels Network saved us during a critical period. Our company devices were fixed quickly, efficiently, and at a reasonable cost. Their technicians are knowledgeable and professional.",
  },
  {
    id: 7,
    name: "David Chen",
    role: "Creative Director",
    company: "Design Hub",
    image: "/placeholder.svg",
    rating: 5,
    content:
      "As a design professional myself, I have high standards for graphic design work. Daniels Network exceeded those standards with their exceptional creativity and technical skill. They've become our go-to partner for all design projects.",
  },
  {
    id: 8,
    name: "Jennifer Adams",
    role: "School Administrator",
    company: "Central Academy",
    image: "/placeholder.svg",
    rating: 4,
    content:
      "Daniels Network helped modernize our school's IT infrastructure and provided training for our staff. Their patient, educational approach made the transition smooth, and their ongoing support has been invaluable.",
  },
];

export default testimonials;
