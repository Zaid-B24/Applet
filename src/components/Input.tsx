import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type StandardInputProps = InputHTMLAttributes<HTMLInputElement> & {
  as?: "input";
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: "textarea";
};

type InputProps = StandardInputProps | TextareaProps;

export default function Input({ className = "", ...props }: InputProps) {
  const baseStyles =
    "border border-gray-300 rounded-lg px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all";

  if (props.as === "textarea") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...rest } = props;
    return <textarea className={`${baseStyles} ${className}`} {...rest} />;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...rest } = props as StandardInputProps;
  return <input className={`${baseStyles} ${className}`} {...rest} />;
}
