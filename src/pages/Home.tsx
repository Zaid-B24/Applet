import React from "react";
import Testimonials from "../components/Testimonials";
import { AboutSectionComponent } from "../components/AboutComponent";

export const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative min-h-170 sm:min-h-screen overflow-hidden"
        style={{
          backgroundImage: "url('/assets/MainHero-3ef6p8y3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 pt-32 sm:pt-36 lg:pt-40">
          <div className="inline-flex items-center gap-2 bg-white/80 text-[#6246ea] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#6246ea] rounded-full"></span>
            Welcome To Applet
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#161616]">
            Empowering Businesses with
            <br className="hidden sm:block" />
            <span className="text-[#6246ea]">Smart Digital Solutions</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
            We help businesses grow with modern websites, powerful mobile apps,
            result-driven digital marketing, and reliable technical support
            services.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#6246ea] text-white px-6 sm:px-7 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition">
              Get Started Now
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
            </button>

            <button className="flex items-center justify-center gap-2 bg-white text-[#6246ea] px-6 sm:px-7 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition">
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
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </section>

      <AboutSectionComponent />
      {/* OUR SERVICES SECTION */}
      <section className="bg-[#EFF1F3] py-14 md:py-10.5">
        <div className="max-w-270 mx-auto px-5">
          <div className="w-full max-w-107.5 mb-7.5 md:mb-8.5">
            <span className="inline-flex items-center px-3.25 py-1 rounded-full bg-[#E8DEFF] text-[#7B55FF] text-[11px] font-semibold">
              Our Services
            </span>
            <h2 className="mt-2 text-[26px] md:text-[27px] font-medium leading-[1.15] text-[#161616]">
              Our Digital Services
            </h2>
            <p className="mt-4 text-[13px] leading-4.5 text-[#1f1f1f] tracking-[0.2px]">
              We provide modern technology and marketing solutions that help
              businesses improve their online presence, connect with customers,
              and grow efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
            {[
              {
                title: "Web Development",
                desc: "We design and develop responsive, high-performance websites tailored to your business goals.",
                img: "/assets/1-BHLprkVw.png",
                bgClass: "bg-[#e9e0ff] text-[#171717]",
                svgClass: "text-[#1c1c1c]",
                descClass: "text-[#222]",
              },
              {
                title: "App Development",
                desc: "We build user-friendly mobile applications for Android and iOS with smooth performance and modern design.",
                img: "/assets/2-B-VwAfzN.png",
                bgClass: "bg-[#1c1c1c] text-white",
                svgClass: "text-white",
                descClass: "text-[#ededed]",
              },
              {
                title: "Digital Marketing",
                desc: "We help your brand reach the right audience through SEO, social media marketing, ads, and lead generation campaigns.",
                img: "/assets/3-CC2l5dUc.png",
                bgClass: "bg-[#e9e0ff] text-[#171717]",
                svgClass: "text-[#1c1c1c]",
                descClass: "text-[#222]",
              },
              {
                title: "Technical Support",
                desc: "We provide reliable technical assistance, website maintenance, troubleshooting.",
                img: "/assets/4-DBaav5vP.png",
                bgClass: "bg-[#1c1c1c] text-white",
                svgClass: "text-white",
                descClass: "text-[#ededed]",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`w-full min-h-71.5 rounded-[13px] overflow-hidden flex flex-col ${service.bgClass}`}
              >
                <div className="px-[17px] pt-[16px] pb-[10px] flex-1">
                  <div className="flex justify-between items-start gap-3 mb-[16px]">
                    <h3 className="text-[17px] font-medium leading-[20px]">
                      {service.title}
                    </h3>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={service.svgClass}
                      height="15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <p
                    className={`text-[12px] leading-[16px] ${service.descClass}`}
                  >
                    {service.desc}
                  </p>
                </div>
                <div className="px-[12px] pb-[12px]">
                  <img
                    alt={service.title}
                    className="w-full h-[170px] sm:h-[150px] lg:h-[126px] object-cover rounded-[10px]"
                    src={service.img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}

      <section
        className="relative bg-[#EFF1F3] py-16 sm:py-24 lg:py-[200px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Testimonials-4bb3YaIy.png')" }}
      >
        <div className="max-w-[1180px] mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">
            <div className="max-w-[520px] text-center lg:text-left mx-auto lg:mx-0">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#bdaeff] text-[#6d4cff] text-[10px] font-semibold">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl sm:text-[42px] sm:leading-[46px] font-medium text-[#1d1d1d]">
                Your Trusted Partner for Digital Growth
              </h2>
              <p className="mt-4 text-[15px] leading-[26px] text-[#4d4d4d]">
                We combine technology, creativity, and expertise to deliver
                solutions that help businesses succeed in today's competitive
                digital world. Our focus is on creating reliable, scalable, and
                results-driven solutions tailored to your business needs.
              </p>

              <ul className="mt-7 space-y-2 text-[15px] text-[#333] list-disc list-inside lg:list-outside">
                {[
                  "Business-focused digital solutions",
                  "Modern design and technology",
                  "Transparent communication",
                  "On-time project delivery",
                  "Dedicated technical support",
                  "Scalable solutions for growth",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
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
        </div>
      </section>

      {/* HOW WE WORK SECTION */}

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

      <Testimonials />

      {/* LATEST NEWS / BLOG SECTION */}

      <section className="bg-[#EFF1F3] py-[70px] md:py-[90px]">
        <div className="max-w-[1080px] mx-auto px-5">
          <div className="text-center mb-[45px]">
            <span className="inline-flex items-center px-[12px] py-[4px] rounded-full bg-[#d9ccff] text-[#6d4cff] text-[10px] font-semibold">
              Blog
            </span>
            <h2 className="mt-[10px] text-[24px] md:text-[32px] font-medium text-[#1a1a1a]">
              Latest News
            </h2>
            <p className="max-w-[560px] mx-auto mt-[12px] text-[13px] md:text-[14px] leading-[20px] text-[#444]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {[
              {
                title: "Why Every Business Needs a Professional Website",
                desc: "A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.",
                date: "Jan 15, 2025",
                imgSrc:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
              },
              {
                title: "How Mobile Apps Help Businesses Grow",
                desc: "Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.",
                date: "Jan 16, 2025",
                imgSrc:
                  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80",
              },
              {
                title: "Digital Marketing Strategies for Better Leads",
                desc: "Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.",
                date: "Jan 18, 2025",
                imgSrc:
                  "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1000&q=80",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-[170px] overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    src={post.imgSrc}
                  />
                  <span className="absolute top-[12px] left-[12px] bg-[#6d4cff] text-white text-[10px] px-[10px] py-[4px] rounded-full font-medium">
                    {post.date}
                  </span>
                </div>

                <div className="p-[18px]">
                  <h3 className="text-[18px] font-medium leading-[28px] text-[#1a1a1a] mb-[12px] min-h-[85px]">
                    {post.title}
                  </h3>
                  <p className="text-[13px] leading-[22px] text-[#666] mb-[20px] min-h-[88px]">
                    {post.desc}
                  </p>

                  <button className="inline-flex items-center gap-2 text-[#6d4cff] text-[13px] font-medium hover:gap-3 transition-all">
                    Read More
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
