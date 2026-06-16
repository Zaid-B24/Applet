export const AboutSectionComponent = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF1F3]">
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
            <div className="absolute -bottom-5 left-4 sm:-left-6 bg-[#6842ff] text-white rounded-xl px-5 sm:px-8 py-4 sm:py-5 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold">3+</h3>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-5 sm:mb-6">
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
              {[
                "Professional Online Presence",
                "Customizable Solutions",
                "24/7 Availability",
                "Skilled and Trained Team",
                "Use of Advanced Technology",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-[#6842ff] text-sm"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 bg-[#6842ff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5934ea] transition">
              Learn More
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
