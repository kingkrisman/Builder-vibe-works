import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  dark?: boolean;
  useImage?: boolean;
}

const Logo = ({
  className,
  size = "md",
  showText = true,
  dark = false,
}: LogoProps) => {
  // Size mapping
  const sizes = {
    sm: { container: "h-6 w-6", text: "text-lg" },
    md: { container: "h-8 w-8", text: "text-xl" },
    lg: { container: "h-12 w-12", text: "text-3xl" },
  };

  return (
    <Link to="/" className={cn("flex items-center gap-2 font-bold", className)}>
      <motion.div
        className={cn(
          useImage
            ? "overflow-hidden rounded-lg"
            : "flex items-center justify-center rounded-lg bg-primary p-1",
          sizes[size].container,
        )}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {useImage ? (
          <img
            src="/logo.svg"
            alt="Daniels Network"
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            className={cn(
              "flex items-center justify-center text-primary-foreground",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-xl",
            )}
          >
            DN
          </span>
        )}
      </motion.div>

      {showText && (
        <span
          className={cn(
            "font-bold",
            sizes[size].text,
            dark ? "text-white" : "text-inherit",
          )}
        >
          Daniels Network
        </span>
      )}
    </Link>
  );
};

export default Logo;
