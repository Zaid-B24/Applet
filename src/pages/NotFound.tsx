import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center bg-surface-light">
      <div className="max-w-md bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-purple-100 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-600"
          >
            <path d="M6 18h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" />
            <path d="M12 2v3" />
            <path d="M9 2v3" />
            <path d="M15 2v3" />
            <path d="M4 10h16" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-text-muted mb-3">
          Oops! We're Cooking...
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          This route isn't ready yet! We are currently baking something amazing
          here. We'll be back online soon, but until then, let's get you back to
          safety.
        </p>

        <Link
          to="/"
          className="bg-linear-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:scale-105 transition duration-300 w-full sm:w-auto"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
