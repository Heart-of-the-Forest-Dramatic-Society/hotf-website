"use client";

import { Button } from "./button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface HeroButtonProps {
  variant: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function HeroButton({
  variant,
  href,
  onClick,
  children,
  className = "",
}: HeroButtonProps) {
  const router = useRouter();

  const baseClasses =
    "w-60 transform rounded-lg px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5";

  const variantClasses = {
    primary:
      "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    secondary:
      "border border-gray-300 bg-white text-black hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    }
  };

  if (href) {
    return (
      <Link href={href} className="block">
        <Button
          className={buttonClasses}
          aria-label={`Navigate to ${children}`}
        >
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      className={buttonClasses}
      onClick={handleClick}
      aria-label={onClick ? `Click to ${children}` : `Navigate to ${children}`}
    >
      {children}
    </Button>
  );
}
