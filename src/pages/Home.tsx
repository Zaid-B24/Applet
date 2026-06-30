import Testimonials from "../components/Testimonials";
import { DigitalSolution } from "../components/DigitalSolution";
import { DigitalService } from "../components/DigitalService";
import { TrustedPartner } from "../components/TrustedPartner";
import { HowWeWork } from "../components/HowWeWork";
import { LatestNews } from "../components/LatestNews";
import Button from "../components/Button";
import { ArrowRightIcon, PlayCircleIcon } from "../components/Icons";

export const Home = () => {
  return (
    <div>
      <section
        className="relative min-h-170 sm:min-h-screen overflow-hidden"
        style={{
          backgroundImage: "url('/assets/MainHero-3ef6p8y3.jpg')",
          backgroundSize: "auto 120%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 pt-32 sm:pt-36 lg:pt-40">
          <div className="inline-flex items-center gap-2 bg-white/80 text-brand-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
            Welcome To Applet
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-text-main">
            Empowering Businesses with
            <br className="hidden sm:block" />
            <span className="text-brand-primary">Smart Digital Solutions</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
            We help businesses grow with modern websites, powerful mobile apps,
            result-driven digital marketing, and reliable technical support
            services.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button variant="primary">
              Get Started Now
              <ArrowRightIcon className="text-xl" />
            </Button>

            <Button variant="outline">
              <PlayCircleIcon className="text-xl" />
              Watch Video
            </Button>
          </div>
        </div>
      </section>

      <DigitalSolution />

      <DigitalService />

      <TrustedPartner />

      <HowWeWork />

      <Testimonials />

      <LatestNews />
    </div>
  );
};
