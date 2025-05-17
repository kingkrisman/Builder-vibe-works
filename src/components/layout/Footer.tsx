import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container">
        <div className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-lg bg-primary p-1">
                <span className="block h-8 w-8 text-xl font-bold text-primary-foreground">
                  DN
                </span>
              </div>
              <span className="text-xl font-bold">Daniels Network</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              We provide cutting-edge technology solutions to businesses and
              individuals, helping them transform their ideas into reality.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 rounded-full"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 rounded-full"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 rounded-full"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 rounded-full"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/services/software-development"
                  className="hover:text-primary"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/video-editing"
                  className="hover:text-primary"
                >
                  Video Editing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="hover:text-primary"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/phone-repair"
                  className="hover:text-primary"
                >
                  Phone Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services/graphic-design"
                  className="hover:text-primary"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ict-services"
                  className="hover:text-primary"
                >
                  ICT Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <span>123 Tech Street, Silicon Valley, CA 94043, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>info@danielsnetwork.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium">
                Subscribe to our newsletter
              </h4>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="h-9" />
                <Button size="sm" variant="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Daniels Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
