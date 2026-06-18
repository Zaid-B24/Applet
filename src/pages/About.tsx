import { HeroHeader } from "../components/HeroHeader";
import { DigitalSolution } from "../components/DigitalSolution";
import { TrustedPartner } from "../components/TrustedPartner";
import { HowWeWork } from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
import { LatestNews } from "../components/LatestNews";

export const About = () => {
  const title = "About Us";
  return (
    <div>
      <HeroHeader title={title} />

      <DigitalSolution />

      <TrustedPartner />

      <HowWeWork />

      <Testimonials />

      <LatestNews />
    </div>
  );
};
