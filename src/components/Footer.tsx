import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./Icons";

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Web Design & Development", path: "/web-development" },
  { label: "Mobile App Development", path: "/app-development" },
  { label: "Digital Marketing", path: "/digital-marketing" },
  { label: "Technical Support", path: "/technical-support" },
];

const SOCIAL_LINKS = [
  { icon: FacebookIcon, bg: "bg-[#1877f2]", url: "#" },
  { icon: InstagramIcon, bg: "bg-[#e4405f]", url: "#" },
  { icon: LinkedInIcon, bg: "bg-[#0a66c2]", url: "#" },
  { icon: XIcon, bg: "bg-black", url: "#" }, // Preserved original hex codes specifically for exact brand matching of external socials
];

export const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-surface-light bg-no-repeat pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-48"
      style={{ backgroundImage: "url('/assets/CTA_Footer-dR5eF6rt.png')" }}
    >
      <div className="max-w-270 mx-auto px-5">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl leading-tight sm:leading-snug font-medium text-text-main">
            Ready to Bring Your Dreams to Life?
            <br className="hidden sm:block" />
            Let's <span className="text-brand-secondary">Get Started</span>{" "}
            Today
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              placeholder="Enter your email"
              className="w-full sm:w-71.25 h-10 rounded-full px-4 text-sm outline-none border border-gray-300 focus:ring-2 focus:ring-brand-secondary transition-all"
              type="email"
            />
            <Link
              className="h-10 px-6 rounded-full bg-brand-secondary hover:bg-brand-primary transition-colors text-white text-sm font-medium flex items-center justify-center gap-2"
              to="/contact"
            >
              Let's Talk
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-6 sm:px-10 py-10 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
            <div>
              <img
                alt="Applet Technology Services"
                className="w-45 sm:w-50 mb-6"
                src="/logo.png"
              />
              <h4 className="text-sm font-semibold text-text-main mb-2">
                About Company.
              </h4>
              <p className="text-xs leading-relaxed text-gray-600">
                Empowering Futures, Crafting Solutions.
              </p>

              <div className="flex gap-2 mt-5">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-[11px] transition-transform hover:scale-110 ${social.bg}`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-main mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 text-xs text-gray-700">
                {QUICK_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="hover:text-brand-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-main mb-6">
                Services
              </h4>
              <ul className="space-y-3 text-xs text-gray-700">
                {SERVICE_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="hover:text-brand-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-text-main mb-6">
                Contact
              </h4>
              <p className="text-xs font-semibold text-text-main mb-3">
                Operational Address:
              </p>
              <p className="text-xs leading-relaxed text-gray-700 mb-4">
                47, Kotwal Nagar, Khamla, Nagpur, Maharashtra 440022, India
              </p>
              <a
                href="mailto:HR-MANAGER@MYAPPLEsoft.com"
                className="text-xs font-semibold uppercase text-brand-secondary hover:underline wrap-break-word"
              >
                HR-MANAGER@MYAPPLEsoft.com
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-gray-600">
            <div className="flex flex-wrap gap-6 font-medium">
              <span className="cursor-pointer hover:text-brand-secondary transition-colors">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-brand-secondary transition-colors">
                Terms &amp; Conditions
              </span>
            </div>
            <p>
              Copyright {new Date().getFullYear()} Designed and developed by{" "}
              <span className="font-semibold text-text-main cursor-pointer hover:text-brand-secondary transition-colors">
                Adbornsolutions.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
