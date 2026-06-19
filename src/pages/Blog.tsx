import { HeroHeader } from "../components/HeroHeader";
import BlogCard from "../components/BlogCard";
import { BLOG_POSTS } from "../data/blogData";

export const Blog = () => {
  const title = "Blog";
  return (
    <div>
      <HeroHeader title={title} />
      <section className="py-14 sm:py-16 lg:py-20 bg-surface-light min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
            Latest News
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Stay updated with our latest insights, tips, and strategies in
            digital marketing, web design, and IT solutions.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
