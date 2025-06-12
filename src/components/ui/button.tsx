
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const base = "px-4 py-2 rounded-md font-medium transition-colors";
    const styles =
      variant === "outline"
        ? "border border-gray-300 text-gray-700 hover:bg-gray-100"
        : "bg-black text-white hover:bg-gray-800";

    return (
      <button ref={ref} className={`${base} ${styles} ${className}`} {...props} />
    );
  }
);
Button.displayName = "Button";
