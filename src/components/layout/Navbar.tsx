import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const NavLink = ({
  href,
  children,
  className,
  onClick,
  isActive = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground",
        className,
      )}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
          layoutId="navbar-indicator"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const onServicesHover = () => {
    setShowServicesDropdown(true);
  };

  const onServicesLeave = () => {
    setShowServicesDropdown(false);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-md"
          : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo useImage size="lg" showText />

        <div className="hidden md:flex md:items-center md:gap-6">
          <nav className="flex items-center gap-1">
            <NavLink href="/" isActive={isActive("/")}>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={onServicesHover}
              onMouseLeave={onServicesLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                  location.pathname.includes("/services")
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {showServicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-64 rounded-md border bg-background shadow-lg"
                  >
                    <div className="grid gap-1 p-2">
                      <Link
                        to="/services/software-development"
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        Software Development
                      </Link>
                      <Link
                        to="/services/video-editing"
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        Video Editing
                      </Link>
                      <Link
                        to="/services/app-development"
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        App Development
                      </Link>
                      <Link
                        to="/services/phone-repair"
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        Phone Repair
                      </Link>
                      <Link
                        to="/services/graphic-design"
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        Graphic Design
                      </Link>
                      <Link
                        to="/services/ict-services"
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                      >
                        ICT Services
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/about" isActive={isActive("/about")}>
              About Us
            </NavLink>
            <NavLink href="/contact" isActive={isActive("/contact")}>
              Contact
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t bg-background md:hidden"
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-2">
                <NavLink
                  href="/"
                  className="px-0 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>

                <div className="flex flex-col gap-1">
                  <div className="px-0 py-2 text-sm font-medium text-muted-foreground">
                    Services
                  </div>
                  <div className="ml-4 flex flex-col gap-2">
                    <Link
                      to="/services/software-development"
                      className="py-1 text-sm text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Software Development
                    </Link>
                    <Link
                      to="/services/video-editing"
                      className="py-1 text-sm text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Video Editing
                    </Link>
                    <Link
                      to="/services/app-development"
                      className="py-1 text-sm text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      App Development
                    </Link>
                    <Link
                      to="/services/phone-repair"
                      className="py-1 text-sm text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Phone Repair
                    </Link>
                    <Link
                      to="/services/graphic-design"
                      className="py-1 text-sm text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Graphic Design
                    </Link>
                    <Link
                      to="/services/ict-services"
                      className="py-1 text-sm text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      ICT Services
                    </Link>
                  </div>
                </div>

                <NavLink
                  href="/about"
                  className="px-0 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </NavLink>
                <NavLink
                  href="/contact"
                  className="px-0 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>

                <div className="mt-4">
                  <Button className="w-full" size="sm">
                    Get a Quote
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
