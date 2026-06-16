import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div>
      <section className="w-full min-h-62.5 sm:min-h-80 md:min-h-95 relative flex items-center justify-center bg-linear-to-r from-purple-400 to-purple-300 px-5 pt-20 text-center overflow-hidden">
        <img
          alt="Sub Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/SubHero-C06ZAM0q.png"
        />

        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Blog
        </h1>
      </section>
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f9f9fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
            Latest News
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Stay updated with our latest insights, tips, and strategies in
            digital marketing, web design, and IT solutions.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                date: "Jan 16, 2025",
                title: "Why Every Business Needs a Professional Website",
                desc: "A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.",
              },
              {
                date: "Jan 16, 2025",
                title: "How Mobile Apps Help Businesses Grow",
                desc: "Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.",
              },
              {
                date: "Jan 16, 2025",
                title: "Digital Marketing Strategies for Better Leads",
                desc: "Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.",
              },
              {
                date: "Jan 16, 2025",
                title: "Why Every Business Needs a Professional Website",
                desc: "A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.",
              },
              {
                date: "Jan 16, 2025",
                title: "How Mobile Apps Help Businesses Grow",
                desc: "Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.",
              },
              {
                date: "Jan 16, 2025",
                title: "Digital Marketing Strategies for Better Leads",
                desc: "Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="bg-purple-200 h-40"></div>

                <div className="p-6">
                  <span className="text-xs text-purple-600">{post.date}</span>

                  <h3 className="mt-2 text-lg font-semibold text-black leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm">{post.desc}</p>

                  <Link
                    to="#"
                    className="mt-4 inline-flex items-center text-purple-600 font-semibold hover:underline"
                  >
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
