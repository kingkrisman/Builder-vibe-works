import {
  Code,
  Smartphone,
  Tv,
  Wrench,
  Palette,
  Server,
  Globe,
  BookOpen,
  LineChart,
  Cloud,
  Headphones,
  Search,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any; // Using any for simplicity; in a real app, you'd use a more specific type
  features: string[];
  benefits: string[];
  image: string;
  caseStudies?: {
    title: string;
    description: string;
    results: string;
  }[];
}

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    shortDescription:
      "Custom software solutions tailored to your business needs.",
    fullDescription:
      "Our software development team creates custom solutions that address your specific business challenges. From web applications to enterprise software, we deliver high-quality, scalable, and secure software products that help businesses streamline operations and enhance productivity.",
    icon: Code,
    features: [
      "Custom web application development",
      "Enterprise software solutions",
      "Legacy system modernization",
      "Software integration services",
      "Agile development methodology",
      "Comprehensive testing and quality assurance",
    ],
    benefits: [
      "Streamlined business processes",
      "Increased operational efficiency",
      "Reduced costs and improved ROI",
      "Enhanced customer experience",
      "Scalable solutions that grow with your business",
      "Competitive advantage in your market",
    ],
    image: "/placeholder.svg",
    caseStudies: [
      {
        title: "Healthcare Management System",
        description:
          "We developed a comprehensive healthcare management system for a regional hospital network, streamlining patient records, appointment scheduling, and billing processes.",
        results:
          "The system reduced administrative workload by 40% and improved patient satisfaction by 35% within the first year of implementation.",
      },
      {
        title: "E-commerce Platform Upgrade",
        description:
          "Redesigned and redeveloped an outdated e-commerce platform for a retail client, implementing modern features and optimizing performance.",
        results:
          "The new platform resulted in a 60% increase in online sales and a 25% improvement in conversion rates.",
      },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    shortDescription:
      "Professional video editing services for all your media needs.",
    fullDescription:
      "Our video editing team transforms raw footage into compelling visual stories. Whether you need promotional videos, social media content, or documentary editing, we combine technical expertise with creative vision to deliver high-quality videos that engage your audience and effectively communicate your message.",
    icon: Tv,
    features: [
      "Professional video editing and post-production",
      "Motion graphics and animation",
      "Color grading and correction",
      "Sound design and audio editing",
      "Special effects and visual enhancements",
      "Video optimization for different platforms",
    ],
    benefits: [
      "Engage your audience with professional-quality videos",
      "Save time and resources on in-house production",
      "Consistent brand representation across video content",
      "Higher conversion rates with compelling visual storytelling",
      "Multi-platform optimization for maximum reach",
      "Technical expertise without the overhead of specialized staff",
    ],
    image: "/placeholder.svg",
    caseStudies: [
      {
        title: "Corporate Brand Video",
        description:
          "Created a compelling brand video for a financial services company, highlighting their values, services, and customer success stories.",
        results:
          "The video gained over 100,000 views across platforms and helped increase brand recognition by 25%.",
      },
      {
        title: "Product Launch Campaign",
        description:
          "Developed a series of product videos for a tech startup's new device launch, including tutorials, promotional clips, and testimonials.",
        results:
          "The campaign contributed to a successful product launch with 150% of expected first-month sales targets.",
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    shortDescription: "Cross-platform mobile apps that drive user engagement.",
    fullDescription:
      "Our app development team creates intuitive, feature-rich mobile applications for iOS and Android platforms. We focus on delivering exceptional user experiences combined with robust backend functionality. From concept to deployment and maintenance, we handle every aspect of the app development lifecycle to ensure your mobile strategy succeeds.",
    icon: Smartphone,
    features: [
      "Native iOS and Android app development",
      "Cross-platform solutions (React Native, Flutter)",
      "Progressive Web Apps (PWAs)",
      "UI/UX design for mobile interfaces",
      "App testing and quality assurance",
      "App Store optimization and deployment",
      "Ongoing maintenance and support",
    ],
    benefits: [
      "Extend your reach to mobile users",
      "Improve customer engagement and loyalty",
      "Create new revenue streams",
      "Enhance brand presence on mobile platforms",
      "Gather valuable user data and insights",
      "Streamline customer interactions and services",
    ],
    image: "/placeholder.svg",
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description:
          "Developed a comprehensive fitness tracking app with workout plans, progress monitoring, and social features for a health and wellness company.",
        results:
          "The app achieved 200,000+ downloads in the first six months and maintains a 4.7-star rating across app stores.",
      },
      {
        title: "Restaurant Ordering System",
        description:
          "Created a mobile ordering system for a restaurant chain, allowing customers to browse menus, place orders, and make payments through the app.",
        results:
          "The solution increased average order value by 15% and improved operational efficiency by reducing order processing time by 40%.",
      },
    ],
  },
  {
    id: "phone-repair",
    title: "Phone Repair",
    shortDescription: "Fast and reliable repair services for all phone brands.",
    fullDescription:
      "Our certified technicians provide expert repair services for all major smartphone brands. We diagnose and fix a wide range of issues, from screen replacements to battery and water damage repairs. With quality parts, competitive pricing, and quick turnaround times, we ensure your devices are back in working order with minimal downtime.",
    icon: Wrench,
    features: [
      "Screen replacement and repair",
      "Battery replacement",
      "Water damage recovery",
      "Camera and button repairs",
      "Charging port and speaker fixes",
      "Software troubleshooting",
      "Data recovery services",
    ],
    benefits: [
      "Extend the lifespan of your devices",
      "Save money compared to replacement costs",
      "Quick turnaround times minimize disruption",
      "Certified technicians ensure quality repairs",
      "Genuine or high-quality compatible parts",
      "Warranty on all repair services",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDescription: "Eye-catching visuals that boost your brand identity.",
    fullDescription:
      "Our graphic design team creates stunning visual assets that elevate your brand and capture your audience's attention. From brand identity and logo design to marketing materials and digital graphics, we combine artistic creativity with strategic thinking to deliver designs that communicate your message effectively and strengthen your brand presence.",
    icon: Palette,
    features: [
      "Brand identity and logo design",
      "Marketing and promotional materials",
      "Social media graphics and templates",
      "Website and UI design elements",
      "Print design (brochures, business cards, etc.)",
      "Packaging design",
      "Infographics and data visualization",
    ],
    benefits: [
      "Establish a strong, recognizable brand identity",
      "Create consistent visual communication across channels",
      "Increase engagement with eye-catching visuals",
      "Effectively communicate complex information",
      "Stand out from competitors with professional design",
      "Build credibility and trust with your audience",
    ],
    image: "/placeholder.svg",
    caseStudies: [
      {
        title: "Brand Identity Redesign",
        description:
          "Completely redesigned the brand identity for a financial advisory firm, including logo, color scheme, typography, and brand guidelines.",
        results:
          "The refreshed brand identity increased brand recognition by 40% and helped the client attract a younger demographic of customers.",
      },
      {
        title: "Product Packaging Design",
        description:
          "Created distinctive packaging designs for a specialty food product line, emphasizing premium quality and unique selling points.",
        results:
          "The new packaging contributed to a 35% increase in retail sales and secured placement in premium stores.",
      },
    ],
  },
  {
    id: "ict-services",
    title: "ICT Services",
    shortDescription: "Comprehensive IT solutions for businesses of all sizes.",
    fullDescription:
      "Our ICT services provide end-to-end technology solutions for businesses at all stages of growth. From IT infrastructure planning and implementation to cybersecurity, cloud services, and ongoing support, we help organizations leverage technology to achieve their business objectives, enhance operational efficiency, and maintain a competitive edge.",
    icon: Server,
    features: [
      "IT infrastructure planning and implementation",
      "Network design and management",
      "Cybersecurity solutions",
      "Cloud services and migration",
      "Data backup and recovery",
      "IT support and maintenance",
      "Technology consulting and strategy",
    ],
    benefits: [
      "Optimize IT infrastructure for performance and cost",
      "Enhance security and protect valuable data",
      "Improve business continuity and disaster recovery",
      "Reduce IT operational costs and complexity",
      "Access to expert knowledge and support",
      "Scale IT resources according to business needs",
    ],
    image: "/placeholder.svg",
    caseStudies: [
      {
        title: "Cloud Migration Project",
        description:
          "Planned and executed a complete cloud migration for a mid-sized accounting firm, moving their infrastructure and applications to a secure cloud environment.",
        results:
          "Reduced IT infrastructure costs by 30% while improving system reliability and enabling remote work capabilities for all staff.",
      },
      {
        title: "Cybersecurity Enhancement",
        description:
          "Implemented comprehensive cybersecurity measures for a legal firm, including network security, endpoint protection, and staff training.",
        results:
          "Successfully prevented several attempted security breaches and achieved compliance with industry security standards.",
      },
    ],
  },
];

export const otherServices = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Responsive, high-performance websites and web applications.",
    icon: Globe,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Results-driven strategies to grow your online presence.",
    icon: LineChart,
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    icon: Cloud,
  },
  {
    id: "training",
    title: "IT Training",
    description:
      "Customized training programs for technical skills development.",
    icon: BookOpen,
  },
  {
    id: "support",
    title: "Technical Support",
    description: "24/7 technical assistance for your technology needs.",
    icon: Headphones,
  },
  {
    id: "seo",
    title: "SEO Services",
    description: "Improve your website visibility and search engine rankings.",
    icon: Search,
  },
];

export default services;
