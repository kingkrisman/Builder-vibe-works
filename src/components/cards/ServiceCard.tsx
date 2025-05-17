import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
  index?: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  link,
  className,
  index = 0,
}: ServiceCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold">
        <Link to={link} className="outline-none focus:underline">
          {title}
        </Link>
      </h3>

      <p className="mb-6 text-muted-foreground">{description}</p>

      <Link
        to={link}
        className="inline-flex items-center text-sm font-medium text-primary transition-all hover:underline focus:underline"
      >
        <span>Learn more</span>
        <motion.div
          animate={{ x: hovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="ml-1 h-4 w-4" />
        </motion.div>
      </Link>

      {/* Decorative animated element */}
      <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-1/2 translate-y-1/2 transform rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-150"></div>
    </motion.div>
  );
};

export default ServiceCard;
