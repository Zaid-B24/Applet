import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="fixed top-3 sm:top-4 left-0 w-full z-50 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-full px-4 md:px-8 py-2.5 sm:py-3 shadow-lg">
          <Link className="flex items-center gap-3" to="/">
            <img
              alt="Logo"
              className="h-10 sm:h-12 w-auto object-contain"
              src="/logo.png"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link
              className="text-black font-medium hover:text-violet-300 transition"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-black font-medium hover:text-violet-300 transition"
              to="/about"
            >
              About Us
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-black font-medium hover:text-violet-300 transition">
                Services
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div className="absolute top-10 left-0 w-56 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3">
                <Link
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                  to="/web-development"
                >
                  Web Development
                </Link>
                <Link
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                  to="/app-development"
                >
                  App Development
                </Link>
                <Link
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                  to="/digital-marketing"
                >
                  Digital Marketing
                </Link>
                <Link
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                  to="/technical-support"
                >
                  Technical Support
                </Link>
              </div>
            </div>

            <Link
              className="text-black font-medium hover:text-violet-300 transition"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-black font-medium hover:text-violet-300 transition"
              to="/contact"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link
              className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition"
              to="/contact"
            >
              Let's Talk
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          <button
            className="lg:hidden text-text-main text-2xl"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-black/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 max-h-[calc(100vh-110px)] overflow-y-auto">
            <div className="flex flex-col gap-5 text-white">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full gap-2"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isMobileServicesOpen && (
                  <div className="flex flex-col gap-3 mt-4 pl-4 border-l border-white/20 text-gray-300">
                    <Link
                      to="/web-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/app-development"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      App Development
                    </Link>
                    <Link
                      to="/digital-marketing"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      to="/technical-support"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Technical Support
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>

              <Link
                className="bg-linear-to-r from-violet-600 to-purple-600 text-center py-3 rounded-full mt-2 font-medium hover:scale-105 transition"
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
