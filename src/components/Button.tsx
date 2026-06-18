import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "rounded";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 font-semibold shadow-md transition hover:scale-105";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-brand-primary text-white",
    outline: "bg-white text-brand-primary",
    rounded:
      "bg-brand-secondary text-white rounded-full hover:bg-brand-primary-hover hover:scale-100",
  };

  const shape = variant === "rounded" ? "" : "rounded-md";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${shape} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
