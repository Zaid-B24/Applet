import Button from "../components/Button";
import { HeroHeader } from "../components/HeroHeader";
import { HowWeWork } from "../components/HowWeWork";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleBigIcon,
  CodeXmlIcon,
  DatabaseIcon,
  ShoppingCartIcon,
  WandSparklesIcon,
} from "../components/Icons";
import Testimonials from "../components/Testimonials";

const WEB_DEV_BENEFITS = [
  "Customized Solutions",
  "Responsive & Mobile-Friendly",
  "SEO-Optimized",
  "Modern Design & UI/UX",
  "High Performance",
];

const WEB_DEV_SOLUTIONS = [
  {
    title: "Business Websites",
    desc: "Professional websites for businesses.",
    Icon: BriefcaseIcon,
  },
  {
    title: "E-Commerce",
    desc: "Online stores with payment integration.",
    Icon: ShoppingCartIcon,
  },
  {
    title: "Custom Apps",
    desc: "Tailored web applications.",
    Icon: CodeXmlIcon,
  },
  {
    title: "Website Redesign",
    desc: "Modern redesign solutions.",
    Icon: WandSparklesIcon,
  },
  {
    title: "CMS Integration",
    desc: "WordPress & custom CMS.",
    Icon: DatabaseIcon,
  },
];

export const WebDevelopment = () => {
  const title = "Web Development";
  return (
    <div>
      <HeroHeader title={title} />
      <section className="py-14 sm:py-16 lg:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 w-full rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Web Development Hero"
              className="w-full aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 object-cover"
              src="/assets/Shero1-DnfPGX70.png"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-5 sm:mb-6 leading-tight">
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
        className="relative bg-surface-light py-16 sm:py-24 lg:py-50 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Testimonials-4bb3YaIy.png')" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 lg:flex lg:items-center lg:gap-16">
          <div className="lg:flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main mb-5 sm:mb-6 leading-tight">
              Why Choose Our Web Development Services
            </h2>
            <p className="text-gray-700 mb-8 leading-7">
              We combine technology, creativity, and expertise to deliver
              solutions that help businesses succeed in today's competitive
              digital world. Our focus is on creating reliable, scalable, and
              results-driven solutions tailored to your business needs.
            </p>

            <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto lg:mx-0">
              {WEB_DEV_BENEFITS.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleBigIcon className="text-brand-secondary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10">
              <img
                alt="Why Choose Us"
                className="w-full max-w-155 object-cover mt-5 rounded-lg shadow-sm"
                src="/assets/WhyChooseUs-DAaa2-Kc.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-surface-light">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-text-main mb-10 sm:mb-14 leading-tight">
            Our Web Development Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {WEB_DEV_SOLUTIONS.map((sol, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-5 text-brand-secondary">
                  <sol.Icon />
                </div>
                <h3 className="font-semibold text-text-main text-lg mb-3">
                  {sol.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            ))}

            <div className="bg-brand-light border border-transparent rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Ready to Build?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's create your next website.
              </p>

              <Button variant="primary">
                Start Project
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <HowWeWork />
    </div>
  );
};
