import { useEffect, useState } from "react";

const REVIEWS_DATA = [
  {
    rating: "5/5",
    text: "Excellent service and timely delivery. They understood our requirements properly and created a solution that matched our brand perfectly.",
    name: "Neha Kapoor",
    role: "Business Consultant",
    img: "https://i.pravatar.cc/80?img=25",
  },
  {
    rating: "5/5",
    text: "The web development team exceeded our expectations. Our new e-commerce site is lightning fast and our sales have noticeably increased since launch.",
    name: "Rohan Sharma",
    role: "E-commerce Owner",
    img: "https://i.pravatar.cc/80?img=33",
  },
  {
    rating: "5/5",
    text: "Incredibly professional team. Their digital marketing campaign started bringing in high-quality B2B leads within the very first month.",
    name: "Priya Patel",
    role: "Marketing Director",
    img: "https://i.pravatar.cc/80?img=12",
  },
  {
    rating: "5/5",
    text: "Their technical support is exceptional. Whenever we face an infrastructure or hosting bottleneck, they resolve it almost instantly.",
    name: "Aarav Mehta",
    role: "Startup Founder",
    img: "https://i.pravatar.cc/80?img=47",
  },
];

export default function Testimonials() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-surface-light bg-cover bg-center bg-no-repeat py-16 sm:py-24 lg:py-55 overflow-hidden"
      style={{ backgroundImage: "url('/assets/Testimonials-4bb3YaIy.png')" }}
    >
      <div className="max-w-270 mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="relative w-full flex flex-col items-center lg:items-start justify-center">
            <div className="relative w-full max-w-102.5 min-h-80 sm:min-h-90 border-8 sm:border-10 border-brand-muted bg-white px-6 sm:px-10 pt-16 sm:pt-28 pb-8 transition-all duration-300 rounded-sm">
              <div className="text-yellow-400 text-[14px] tracking-widest mb-4 font-bold">
                {REVIEWS_DATA[activeReview].rating}
              </div>

              <p className="text-[14px] leading-relaxed text-text-main mb-8 min-h-25 italic">
                "{REVIEWS_DATA[activeReview].text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  alt={REVIEWS_DATA[activeReview].name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                  src={REVIEWS_DATA[activeReview].img}
                />
                <div>
                  <h4 className="text-[13px] font-semibold text-text-main">
                    {REVIEWS_DATA[activeReview].name}
                  </h4>
                  <p className="text-[10px] text-gray-800 uppercase tracking-wide mt-0.5">
                    {REVIEWS_DATA[activeReview].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-107.5 text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-flex px-3 py-1 rounded-full bg-brand-muted text-brand-secondary text-[10px] font-semibold uppercase tracking-wider">
              Testimonials
            </span>

            <h2 className="mt-3 text-[30px] leading-tight font-medium text-text-main">
              What Our Clients Say
            </h2>

            <p className="mt-4 text-[14px] leading-relaxed text-text-main opacity-80">
              We take pride in delivering solutions that help businesses grow,
              improve efficiency, and achieve their goals. Here's what our
              clients have to say about working with us.
            </p>

            <div className="mt-10">
              <p className="text-[11px] text-gray-600 mb-1 uppercase tracking-wider font-semibold">
                Satisfaction Rate
              </p>
              <h3 className="text-3xl font-bold text-text-main">98.7%</h3>
            </div>

            <div className="mt-8">
              <p className="text-[11px] text-gray-600 mb-1 uppercase tracking-wider font-semibold">
                Faster Digital Growth
              </p>
              <h3 className="text-3xl font-bold text-text-main">65%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
