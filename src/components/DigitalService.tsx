import { ArrowUpRightIcon } from "./Icons";

const SERVICES_DATA = [
  {
    title: "Web Development",
    desc: "We design and develop responsive, high-performance websites tailored to your business goals.",
    img: "/assets/1-BHLprkVw.png",
    variant: "light" as const,
  },
  {
    title: "App Development",
    desc: "We build user-friendly mobile applications for Android and iOS with smooth performance and modern design.",
    img: "/assets/2-B-VwAfzN.png",
    variant: "dark" as const,
  },
  {
    title: "Digital Marketing",
    desc: "We help your brand reach the right audience through SEO, social media marketing, ads, and lead generation campaigns.",
    img: "/assets/3-CC2l5dUc.png",
    variant: "light" as const,
  },
  {
    title: "Technical Support",
    desc: "We provide reliable technical assistance, website maintenance, troubleshooting.",
    img: "/assets/4-DBaav5vP.png",
    variant: "dark" as const,
  },
];

function ServiceCard({ service }: { service: (typeof SERVICES_DATA)[0] }) {
  const isDark = service.variant === "dark";

  const cardBg = isDark
    ? "bg-surface-dark text-white"
    : "bg-brand-light text-text-main";
  const descText = isDark ? "text-text-inverse-muted" : "text-gray-800";
  const iconColor = isDark ? "text-white" : "text-text-main";

  return (
    <div
      className={`w-full min-h-71.5 rounded-[13px] overflow-hidden flex flex-col ${cardBg}`}
    >
      <div className="px-4 pt-4 pb-2.5 flex-1">
        <div className="flex justify-between items-start gap-3 mb-4">
          <h3 className="text-[17px] font-medium leading-5">{service.title}</h3>
          <ArrowUpRightIcon className={`h-4 w-4 ${iconColor}`} />
        </div>
        <p className={`text-[12px] leading-4 ${descText}`}>{service.desc}</p>
      </div>
      <div className="px-3 pb-3">
        <img
          alt={service.title}
          className="w-full h-42 sm:h-36 lg:h-32 object-cover rounded-[10px]"
          src={service.img}
        />
      </div>
    </div>
  );
}

export const DigitalService = () => {
  return (
    <section className="bg-surface-light py-14 md:py-10">
      <div className="max-w-270 mx-auto px-5">
        <div className="w-full max-w-107.5 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-light text-brand-accent text-[11px] font-semibold">
            Our Services
          </span>
          <h2 className="mt-2 text-[26px] md:text-[27px] font-medium leading-tight text-text-main">
            Our Digital Services
          </h2>
          <p className="mt-4 text-[13px] leading-relaxed text-text-muted tracking-wide">
            We provide modern technology and marketing solutions that help
            businesses improve their online presence, connect with customers,
            and grow efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
