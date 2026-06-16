import React from "react";

export const WebDevelopment = () => {
  return (
    <div>
      <section className="w-full min-h-[250px] sm:min-h-[320px] md:min-h-[380px] relative flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-300 px-5 pt-20 text-center overflow-hidden">
        <img
          alt="Sub Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/SubHero-C06ZAM0q.png"
        />

        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Web Development
        </h1>
      </section>
      <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF1F3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 w-full rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Hero Image"
              className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover"
              src="/assets/Shero1-DnfPGX70.png"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-5 sm:mb-6 leading-tight">
              Build Cutting-Edge Websites That Scale Your Business
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
              Novara Digital Services creates responsive, fast, and
              high-performing websites to help you reach more customers and
              maximize online impact.
            </p>
          </div>
        </div>
      </section>
      <section
        className="relative bg-[#EFF1F3] py-16 sm:py-24 lg:py-[200px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Testimonials-4bb3YaIy.png')" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 lg:flex lg:items-center lg:gap-16">
          <div className="lg:flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-5 sm:mb-6 leading-tight">
              Why Choose Our Web Development Services
            </h2>
            <p className="text-gray-700 mb-8 leading-7">
              We combine technology, creativity, and expertise to deliver
              solutions that help businesses succeed in today's competitive
              digital world. Our focus is on creating reliable, scalable, and
              results-driven solutions tailored to your business needs.
            </p>

            <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto lg:mx-0">
              {[
                "Customized Solutions",
                "Responsive & Mobile-Friendly",
                "SEO-Optimized",
                "Modern Design & UI/UX",
                "High Performance",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big text-[#6842ff] mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10">
              <img
                alt="Why Choose Us"
                className="w-full max-w-[620px] object-cover mt-5"
                src="/assets/WhyChooseUs-DAaa2-Kc.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF1F3]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 leading-tight">
            Our Web Development Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Business Websites",
                desc: "Professional websites for businesses.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase text-purple-600"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                ),
              },
              {
                title: "E-Commerce",
                desc: "Online stores with payment integration.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart text-purple-600"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                ),
              },
              {
                title: "Custom Apps",
                desc: "Tailored web applications.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code-xml text-purple-600"
                    aria-hidden="true"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                ),
              },
              {
                title: "Website Redesign",
                desc: "Modern redesign solutions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-wand-sparkles text-purple-600"
                    aria-hidden="true"
                  >
                    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
                    <path d="m14 7 3 3"></path>
                    <path d="M5 6v4"></path>
                    <path d="M19 14v4"></path>
                    <path d="M10 2v2"></path>
                    <path d="M7 8H3"></path>
                    <path d="M21 16h-4"></path>
                    <path d="M11 3H9"></path>
                  </svg>
                ),
              },
              {
                title: "CMS Integration",
                desc: "WordPress &amp; custom CMS.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-database text-purple-600"
                    aria-hidden="true"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                ),
              },
            ].map((sol, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                  {sol.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{sol.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            ))}

            <div className="bg-purple-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Ready to Build?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's create your next website.
              </p>

              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
                Start Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-[#EFF1F3] bg-center bg-no-repeat py-16 sm:py-24 lg:py-[220px] overflow-hidden"
        style={{ backgroundImage: "url('/assets/Testimonials-4bb3YaIy.png')" }}
      >
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[80px]">
            <div className="relative w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[410px] min-h-[320px] sm:min-h-[360px] border-[8px] sm:border-[10px] border-[#c5b6ff] bg-[#f4f6f8] px-6 sm:px-[42px] pt-16 sm:pt-[118px] pb-8 sm:pb-[35px]">
                <div className="text-[#ffbb00] text-[14px] tracking-[2px] mb-[18px]">
                  5/5
                </div>

                <p className="text-[14px] leading-[19px] text-[#111] mb-[34px]">
                  Excellent service and timely delivery. They understood our
                  requirements properly and created a solution that matched our
                  brand perfectly.
                </p>

                <div className="flex items-center gap-[16px]">
                  <img
                    alt="Neha Kapoor"
                    className="w-[48px] h-[48px] rounded-full object-cover"
                    src="https://i.pravatar.cc/80?img=25"
                  />
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#111]">
                      Neha Kapoor
                    </h4>
                    <p className="text-[10px] text-[#333]">
                      Business Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[430px] text-center lg:text-left mx-auto lg:mx-0">
              <span className="inline-flex px-[12px] py-[5px] rounded-full bg-[#c7b8ff] text-[#6b4cff] text-[10px] font-semibold">
                Testimonials
              </span>

              <h2 className="mt-[12px] text-[30px] leading-[35px] font-medium text-[#151515]">
                What Our Clients Say
              </h2>

              <p className="mt-[18px] text-[14px] leading-[20px] text-[#111]">
                We take pride in delivering solutions that help businesses grow,
                improve efficiency, and achieve their goals. Here's what our
                clients have to say about working with us.
              </p>

              <div className="mt-[42px]">
                <p className="text-[11px] text-[#111] mb-[6px]">
                  Satisfaction Rate
                </p>
                <h3 className="text-[28px] font-medium text-[#111]">98.7%</h3>
              </div>

              <div className="mt-[34px]">
                <p className="text-[11px] text-[#111] mb-[6px]">
                  Faster Digital
                </p>
                <h3 className="text-[28px] font-medium text-[#111]">65%</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EFF1F3] py-12 sm:py-[38px]">
        <div className="max-w-[1180px] mx-auto px-5">
          <h2 className="text-center text-[26px] font-medium text-[#111] mb-[32px]">
            How We Work
          </h2>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between gap-8 sm:gap-10 lg:gap-0">
            {[
              {
                number: "1",
                title: "Understand Your Needs",
                desc: "We discuss your business goals and project requirements.",
                icon: (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
                  </svg>
                ),
                arrow:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAiCAYAAACEPZHaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAbtJREFUeAHt3I9NwkAUBvCP6ACMcE4gbnAj6ATeBrIBbKAb6AawAd0ANwAnQDfwvryrNVGDEEp71++XvLSQ8K9996evpSMMxziGizFJ69dpebfnddMYjzG26TGX7zHe0jqjSs8VZ4Sy+Rj3aclk+ECzM7cplv98L/dtWScbgwl3i0ITpHTceQHNzu2KQ/ffYXDGKXLAYWoTY53WHaQVTIgQYxVjB+vac+JjvKBJlgAly0n4GE+wpKhgGzaX3uMvHpYs/E1zyFECrKVVsI2Ye1L8Jqehsnc4XnuISD9dQHIwi3EV4xUD4mB1CtnPweZiPPopfptxQsbSNWfvAXKIAEuSZxR6eMyukonBQ1bN3I83hyXKFIXwsB9UQYWhU3GwYWeFjLGXWMCSw0Pa4JC5AA0nIiIihXHowRwlt1PuQ1Jfh9JJca0ueG2gSWifeXRQM5mkD1XBKw8Otr9mOIO62wqQnLAhs6i2QEuNuh5SWL1zkFyx12cDdzghJscaGlJKMUcLjdxDREREROTMWPx6gAwd6yQ/SvMeKn6JqavkX0nC2yPsoCvMpcETsMwJdwn7v8UNmhukiCxhBdHJJ+bsTsBcsM4VAAAAAElFTkSuQmCC",
              },
              {
                number: "2",
                title: "Build the Solution",
                desc: "Our team develops your website, app, or marketing campaign with quality.",
                icon: (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                  </svg>
                ),
                arrow:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAiCAYAAACEPZHaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAcdJREFUeAHt289NwzAYBfBHu0CunPCRG+0GZoOOkBHYoNkAbhzpBozACJQJyJUT5QY3/PQ5NEKoLf2Txu77SZ+aVmmlKi+O7ThDAI+h3kLVEFmahhpzYxTqNdQNRAzDwUy45gMHhUQMM/ATjkH8sA51HWoBEctCDREREZEETCAnZ7DhfgUsIM9ojY0lWQ+hPA6ggo2RPSRFPNF5ks/i9kF4WEimkJQ42HGr0AEX6imWg/SdD/WOI8yUV7BUHqy5kp0xFAyHx5EoHP1VQgMLWaGATmARydoddA1M1qYzqbvgGhN2lDRvsn/sX3hkwMFm7zgkLiH74NHhxFdXStif4kJpB9mGg01QZn3Lo4TWwP4XLyfNYuIKJzJ81Rh9MyXU8soKbGk9RPpmiH67DXUOW4L/Celc3wPyBVvJdh/qMtQH8ntew8P6FTVkaw7LjhqLs7MjpIudc/YrOFzlrfgSsjcMxgwWlJQWUv8OxQzqeErULNqZwUKRzPD+DHljC8MWZw67xs9xHAxEks895x4QhqMJiQt1BQsJD9ZLfK3W/EYRv1u0iu8v4jZ/e4xMH3zPPSB/4QEtWq/Vmv0ncZ9Fq+pY3G5apyx9AwxiVt9MzY5wAAAAAElFTkSuQmCC",
              },
              {
                number: "3",
                title: "Test & Improve",
                desc: "We test everything carefully to ensure smooth performance.",
                icon: (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                  </svg>
                ),
                arrow:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAiCAYAAACEPZHaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAbtJREFUeAHt3I9NwkAUBvCP6ACMcE4gbnAj6ATeBrIBbKAb6AawAd0ANwAnQDfwvryrNVGDEEp71++XvLSQ8K9996evpSMMxziGizFJ69dpebfnddMYjzG26TGX7zHe0jqjSs8VZ4Sy+Rj3aclk+ECzM7cplv98L/dtWScbgwl3i0ITpHTceQHNzu2KQ/ffYXDGKXLAYWoTY53WHaQVTIgQYxVjB+vac+JjvKBJlgAly0n4GE+wpKhgGzaX3uMvHpYs/E1zyFECrKVVsI2Ye1L8Jqehsnc4XnuISD9dQHIwi3EV4xUD4mB1CtnPweZiPPopfptxQsbSNWfvAXKIAEuSZxR6eMyukonBQ1bN3I83hyXKFIXwsB9UQYWhU3GwYWeFjLGXWMCSw0Pa4JC5AA0nIiIihXHowRwlt1PuQ1Jfh9JJca0ueG2gSWifeXRQM5mkD1XBKw8Otr9mOIO62wqQnLAhs6i2QEuNuh5SWL1zkFyx12cDdzghJscaGlJKMUcLjdxDREREROTMWPx6gAwd6yQ/SvMeKn6JqavkX0nC2yPsoCvMpcETsMwJdwn7v8UNmhukiCxhBdHJJ+bsTsBcsM4VAAAAAElFTkSuQmCC",
              },
              {
                number: "4",
                title: "Launch & Support",
                desc: "We help you launch successfully and provide ongoing support.",
                icon: (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
                  </svg>
                ),
                arrow: null,
              },
            ].map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Card */}
                <div className="relative w-full lg:w-[210px] text-center">
                  <span className="absolute top-[-2px] left-[calc(50%-45px)] lg:left-[32px] text-[12px] text-black">
                    {step.number}
                  </span>
                  <div className="mx-auto w-[66px] h-[66px] rounded-full bg-white flex items-center justify-center mb-[14px]">
                    <div className="w-[43px] h-[43px] rounded-full bg-[#6b4cff] text-white flex items-center justify-center text-[18px]">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-[17px] font-semibold leading-[20px] text-[#111] mb-[10px]">
                    {step.title}
                  </h3>
                  <p className="text-[11px] leading-[14px] text-[#111] max-w-[150px] mx-auto">
                    {step.desc}
                  </p>
                </div>

                {step.arrow && (
                  <img
                    alt=""
                    className="hidden lg:block w-[112px] h-auto mt-[34px] object-contain"
                    src={step.arrow}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
