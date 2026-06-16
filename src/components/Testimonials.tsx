import { useEffect, useState } from "react";

export default function Testimonials() {
  const reviews = [
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

  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section
      className="relative bg-cover bg-[#EFF1F3] bg-center bg-no-repeat py-16 sm:py-24 lg:py-[220px] overflow-hidden"
      style={{ backgroundImage: "url('/assets/Testimonials-4bb3YaIy.png')" }}
    >
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[80px]">
          <div className="relative w-full flex flex-col items-center lg:items-start justify-center">
            <div className="relative w-full max-w-[410px] min-h-[320px] sm:min-h-[360px] border-[8px] sm:border-[10px] border-[#c5b6ff] bg-[#f4f6f8] px-6 sm:px-[42px] pt-16 sm:pt-[118px] pb-8 sm:pb-[35px] transition-all duration-300">
              <div className="text-[#ffbb00] text-[14px] tracking-[2px] mb-[18px]">
                {reviews[activeReview].rating}
              </div>

              <p className="text-[14px] leading-[19px] text-[#111] mb-[34px] min-h-[95px]">
                "{reviews[activeReview].text}"
              </p>

              <div className="flex items-center gap-[16px]">
                <img
                  alt={reviews[activeReview].name}
                  className="w-[48px] h-[48px] rounded-full object-cover shadow-sm"
                  src={reviews[activeReview].img}
                />
                <div>
                  <h4 className="text-[13px] font-semibold text-[#111]">
                    {reviews[activeReview].name}
                  </h4>
                  <p className="text-[10px] text-[#333]">
                    {reviews[activeReview].role}
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
              <p className="text-[11px] text-[#111] mb-[6px]">Faster Digital</p>
              <h3 className="text-[28px] font-medium text-[#111]">65%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
