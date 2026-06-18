import { BLOG_POSTS } from "../data/blogData";
import BlogCard from "./BlogCard";

export const LatestNews = () => {
  const recentPosts = BLOG_POSTS.slice(0, 3);
  return (
    <section className="bg-surface-light py-16 md:py-24">
      <div className="max-w-295 mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-light text-brand-secondary text-[10px] font-semibold uppercase tracking-wider">
            Blog
          </span>
          <h2 className="mt-3 text-[24px] md:text-[32px] font-medium text-text-main">
            Latest News
          </h2>
          <p className="max-w-140 mx-auto mt-3 text-[13px] md:text-[14px] leading-5 text-[#444]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
