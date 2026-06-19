const TRUSTED_FEATURES = [
  "Business-focused digital solutions",
  "Modern design and technology",
  "Transparent communication",
  "On-time project delivery",
  "Dedicated technical support",
  "Scalable solutions for growth",
];

export const TrustedPartner = () => {
  return (
    <section
      className="relative bg-surface-light py-16 sm:py-24 lg:py-50 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/Testimonials-4bb3YaIy.png')" }}
    >
      <div className="max-w-295 mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-17.5 items-center">
          <div className="max-w-130 text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-flex px-3 py-1 rounded-full bg-brand-muted text-brand-secondary text-[10px] font-semibold tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-[42px] sm:leading-tight font-medium text-text-main">
              Your Trusted Partner for Digital Growth
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              We combine technology, creativity, and expertise to deliver
              solutions that help businesses succeed in today's competitive
              digital world. Our focus is on creating reliable, scalable, and
              results-driven solutions tailored to your business needs.
            </p>

            <ul className="mt-7 space-y-2 text-[15px] text-gray-800 list-disc list-inside lg:list-outside lg:ml-4 marker:text-brand-secondary">
              {TRUSTED_FEATURES.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10">
              <img
                alt="Why Choose Us"
                className="w-full max-w-155 object-cover mt-5"
                src="/assets/WhyChooseUs-DAaa2-Kc.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
