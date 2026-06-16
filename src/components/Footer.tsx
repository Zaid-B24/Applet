import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-[#EFF1F3] bg-no-repeat pt-16 sm:pt-[100px] lg:pt-[125px] pb-16 sm:pb-24 lg:pb-[200px]"
      style={{ backgroundImage: "url('/assets/CTA_Footer-dR5eF6rt.png')" }}
    >
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="text-center mb-10 sm:mb-[55px]">
          <h2 className="text-2xl sm:text-[34px] leading-tight sm:leading-[45px] font-medium text-[#202020]">
            Ready to Bring Your Dreams to Life?
            <br className="hidden sm:block" />
            Let's <span className="text-[#6946ff]">Get Started</span> Today
          </h2>

          <div className="mt-[28px] flex flex-col sm:flex-row justify-center gap-[14px] max-w-md mx-auto">
            <input
              placeholder="Enter your email"
              className="w-full sm:w-[285px] h-[40px] sm:h-[36px] rounded-full px-[16px] text-[12px] outline-none bg-white"
              type="email"
            />
            <Link
              className="h-[40px] sm:h-[36px] px-[20px] rounded-full bg-[#6b46ff] text-white text-[13px] flex items-center justify-center gap-2"
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
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[14px] px-5 sm:px-[30px] lg:px-[38px] pt-[30px] pb-[24px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[55px]">
            <div>
              <img
                alt="Applet Technology Services"
                className="w-[180px] sm:w-[205px] mb-[24px]"
                src="/logo.png"
              />
              <h4 className="text-[14px] font-semibold mb-[8px]">
                About Company.
              </h4>
              <p className="text-[12px] leading-[18px] text-[#333]">
                Empowering Futures, Crafting Solutions.
              </p>

              <div className="flex gap-[7px] mt-[18px]">
                <span className="w-[18px] h-[18px] rounded-full bg-[#1877f2] text-white flex items-center justify-center text-[10px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-[#e4405f] text-white flex items-center justify-center text-[10px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-[#0a66c2] text-white flex items-center justify-center text-[10px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold mb-[24px]">
                Quick Links
              </h4>
              <ul className="space-y-[14px] text-[12px] text-[#111]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold mb-[24px]">Services</h4>
              <ul className="space-y-[14px] text-[12px] text-[#111]">
                <li>
                  <Link to="/web-development">
                    Web Design &amp; Development
                  </Link>
                </li>
                <li>
                  <Link to="/app-development">Mobile App Development</Link>
                </li>
                <li>
                  <Link to="/digital-marketing">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/technical-support">Technical Support</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold mb-[24px]">Contact</h4>
              <p className="text-[12px] font-semibold mb-[14px]">
                Operational Address:
              </p>
              <p className="text-[12px] leading-[18px] text-[#111] mb-[14px]">
                47, Kotwal Nagar, Khamla, Nagpur, Maharashtra 440022, India
              </p>
              <p className="text-[12px] uppercase break-words">
                HR-MANAGER@MYAPPLEsoft.com
              </p>
            </div>
          </div>

          <div className="border-t border-[#ddd] mt-[28px] pt-[18px] flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[11px] text-[#111]">
            <div className="flex flex-wrap gap-[18px]">
              <span className="cursor-pointer hover:underline">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:underline">
                Terms &amp; Conditions
              </span>
            </div>
            <p>
              Copyright {new Date().getFullYear()} Designed and developed by{" "}
              <span className="underline cursor-pointer">Adbornsolutions.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
