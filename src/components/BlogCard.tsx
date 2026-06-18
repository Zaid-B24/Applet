import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden bg-brand-light">
        {post.imgSrc ? (
          <img
            alt={post.title}
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
            src={post.imgSrc}
          />
        ) : (
          <div className="w-full h-full bg-brand-light opacity-50"></div>
        )}
        <span className="absolute top-3 left-3 bg-brand-secondary text-white text-[10px] px-3 py-1 rounded-full font-medium shadow-sm tracking-wide">
          {post.date}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold leading-tight text-text-main mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-gray-600 mb-5 line-clamp-3">
          {post.desc}
        </p>

        <Link
          to={post.slug}
          className="mt-auto inline-flex items-center gap-2 text-brand-secondary text-[13px] font-medium hover:gap-3 transition-all"
        >
          Read More
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
