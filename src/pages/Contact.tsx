import { toast } from "sonner";
import { HeroHeader } from "../components/HeroHeader";
import type React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const CONTACT_INFO = [
  {
    title: "Office Address",
    body: (
      <p className="text-gray-700 text-sm leading-relaxed">
        47, Kotwal Nagar, Khanna, Hapur, Maharashtra 440022, India
      </p>
    ),
  },
  {
    title: "Phone Number",
    body: <p className="text-gray-700 font-medium">+91 9500068500</p>,
  },
  {
    title: "Email Address",
    body: (
      <a
        href="mailto:hr-manager@myapplesoft.com"
        className="text-brand-secondary hover:underline break-all"
      >
        hr-manager@myapplesoft.com
      </a>
    ),
  },
  {
    title: "Working Hours",
    body: (
      <div className="text-sm">
        <p className="text-gray-700">Mon–Sat: 10:00 AM – 06:00 PM</p>
        <p className="text-red-500 font-medium mt-1">Sunday: Closed</p>
      </div>
    ),
  },
];

export const Contacts = () => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Thanks! We've received your details.");
  }
  const title = "Contact Us";
  return (
    <div>
      <HeroHeader title={title} />

      <section className="py-16 lg:py-24 bg-surface-light">
        <div className="max-w-295 mx-auto px-5 flex flex-col gap-12 lg:gap-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_INFO.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform"
              >
                <h4 className="text-brand-primary font-semibold mb-3">
                  {card.title}
                </h4>
                {card.body}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="rounded-xl overflow-hidden shadow-sm bg-gray-200 h-112.5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.1234!2d79.1234!3d17.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzI0LjIiTiA3OcKwMDcnMjQuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                title="Office Location"
              ></iframe>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-text-main mb-8">
                Send Us a Message
              </h3>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <Input placeholder="Your Name" type="text" required />

                <Input placeholder="Your Email" type="email" required />

                <Input placeholder="Your Phone" type="tel" />
                <Input
                  as="textarea"
                  placeholder="How can we help you?"
                  rows={5}
                  className="resize-none"
                  required
                />

                <Button type="submit" variant="primary" className="w-full mt-2">
                  Contact Us
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
