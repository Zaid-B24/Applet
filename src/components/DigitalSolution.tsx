import Button from "./Button";
import { CheckCircleIcon, PlayCircleIcon } from "./Icons";

export const DigitalSolution = () => {
  const features = [
    "Professional Online Presence",
    "Customizable Solutions",
    "24/7 Availability",
    "Skilled and Trained Team",
    "Use of Advanced Technology",
  ];
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                alt="About Us"
                className="w-full h-auto object-cover rounded-lg"
                src="/assets/Aboutus-jEzYuJay.png"
              />
            </div>

            <div className="absolute -bottom-5 left-4 sm:-left-6 bg-brand-secondary text-white rounded-xl px-5 sm:px-8 py-4 sm:py-5 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold">3+</h3>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-muted leading-tight mb-5 sm:mb-6">
              Building Digital Solutions That Help Businesses Grow
            </h2>
            <p className="text-gray-600 leading-7 mb-8">
              We provide result-focused technology and marketing services for
              businesses that want to build a strong online presence. From
              website development to mobile apps, digital marketing, and
              technical support, we deliver solutions that are practical,
              scalable, and business-friendly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircleIcon className="text-brand-secondary text-sm" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="outline">
              <PlayCircleIcon className="text-xl" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
