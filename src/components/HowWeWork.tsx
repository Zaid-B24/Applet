import React from "react";
import {
  DevelopmentIcon,
  DiscussionIcon,
  DOTTED_ARROW,
  SupportIcon,
  TestingIcon,
} from "./Icons";

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Understand Your Needs",
    desc: "We discuss your business goals and project requirements.",
    Icon: DiscussionIcon,
  },
  {
    number: "2",
    title: "Build the Solution",
    desc: "Our team develops your website, app, or marketing campaign with quality.",
    Icon: DevelopmentIcon,
  },
  {
    number: "3",
    title: "Test & Improve",
    desc: "We test everything carefully to ensure smooth performance.",
    Icon: TestingIcon,
  },
  {
    number: "4",
    title: "Launch & Support",
    desc: "We help you launch successfully and provide ongoing support.",
    Icon: SupportIcon,
  },
];

export const HowWeWork = () => {
  return (
    <section className="bg-surface-light py-12 sm:py-10">
      <div className="max-w-295 mx-auto px-5">
        <h2 className="text-center text-[26px] font-medium text-text-main mb-8">
          How We Work
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between gap-8 sm:gap-10 lg:gap-0">
          {PROCESS_STEPS.map((step, index) => {
            const showArrow = index < PROCESS_STEPS.length - 1;

            return (
              <React.Fragment key={index}>
                <div className="relative w-full lg:w-52.5 text-center">
                  <span className="absolute -top-1 left-[calc(50%-45px)] lg:left-8 text-[12px] text-black font-semibold">
                    {step.number}
                  </span>

                  <div className="mx-auto w-16.5 h-16.5 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <div className="w-10.75 h-10.75 rounded-full bg-brand-secondary text-white flex items-center justify-center text-[18px]">
                      <step.Icon />
                    </div>
                  </div>

                  <h3 className="text-[17px] font-semibold leading-5 text-text-main mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-text-main max-w-37.5 mx-auto opacity-80">
                    {step.desc}
                  </p>
                </div>

                {showArrow && (
                  <img
                    alt="Next Step"
                    className="hidden lg:block w-28 h-auto mt-8 object-contain"
                    src={DOTTED_ARROW}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
