"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

const VARIANTS = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-white text-[#000048]",
} as const;

interface ButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "children" | "type"
> {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  icon?: IconType;
  iconPosition?: "left" | "right";
  loading?: boolean;
  loadingText?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  loading = false,
  loadingText,
  type = "button",
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {iconPosition === "left" && Icon && (
        <Icon
          className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0${loading ? " animate-pulse" : ""}`}
        />
      )}
      <span>{loading && loadingText ? loadingText : children}</span>
      {iconPosition === "right" && Icon && (
        <Icon
          className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0${loading ? " animate-pulse" : ""}`}
        />
      )}
    </motion.button>
  );
}
