export const Contacts = () => {
  return (
    <div>
      <section className="w-full min-h-62.5 sm:min-h-80 md:min-h-95 relative flex items-center justify-center bg-linear-to-r from-purple-400 to-purple-300 px-5 pt-20 text-center overflow-hidden">
        <img
          alt="Sub Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/SubHero-C06ZAM0q.png"
        />

        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Contact Us
        </h1>
      </section>

      <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF1F3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col gap-10 lg:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Office Address",
                body: (
                  <p>
                    47, Kotwal Nagar, Khanna, Hapur, Maharashtra 440022, India
                  </p>
                ),
              },
              {
                title: "Phone Number",
                body: <p>+91 9500068500</p>,
              },
              {
                title: "Email Address",
                body: (
                  <p className="wrap-break-word">hr-manager@myapplesoft.com</p>
                ),
              },
              {
                title: "Working Hours",
                body: (
                  <>
                    <p>Mon–Sat: 10:00 AM – 06:00 PM</p>
                    <p className="text-red-500">Sunday: Closed</p>
                  </>
                ),
              },
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-purple-600 font-bold mb-2">{card.title}</h4>
                {card.body}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.083604331113!2d77.599!3d28.705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c8a5cf1f00b%3A0x1234567890abcdef!2sYour+Office+Location!5e0!3m2!1sen!2sin!4v1696936328517!5m2!1sen!2sin"
                width="100%"
                height="360"
                loading="lazy"
                className="border-0"
                title="Novara Office Location"
              ></iframe>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-8 shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">
                Send Us a Message
              </h3>

              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                />
                <input
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="email"
                />
                <input
                  placeholder="Your Phone"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="tel"
                />
                <textarea
                  placeholder="Comment"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  rows={4}
                ></textarea>

                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
