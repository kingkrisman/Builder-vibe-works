import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  dark?: boolean;
  useImage?: boolean;
}

const Logo = ({
  className,
  size = "md",
  showText = true,
  dark = false,
  useImage = false,
}: LogoProps) => {
  // Size mapping
  const sizes = {
    sm: { container: "h-6 w-6", text: "text-lg" },
    md: { container: "h-8 w-8", text: "text-xl" },
    lg: { container: "h-12 w-12", text: "text-3xl" },
    xl: { container: "h-16 w-16", text: "text-4xl" },
  };

  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2 font-medium", className)}
    >
      <motion.div
        className={cn(
          useImage
            ? "overflow-hidden rounded-lg flex flex-col"
            : "flex flex-col items-center justify-center rounded-lg bg-primary p-1",
          sizes[size].container,
        )}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {useImage ? (
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F388caa6361de4420a1ccf1f18950c132"
            alt="Daniels Network"
            className="h-full w-full object-cover m-auto"
          />
        ) : (
          <span
            className={cn(
              "flex items-center justify-center text-primary-foreground",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-xl",
              size === "xl" && "text-2xl",
            )}
          >
            DN
          </span>
        )}
      </motion.div>

      {showText && (
        <span
          className={cn(
            "font-medium text-xl",
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
