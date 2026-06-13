import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border border-[#173b8c]/10 bg-[linear-gradient(135deg,#112f72,#2552b1)] text-white shadow-[0_16px_34px_rgba(16,41,95,0.2)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(16,41,95,0.24)]",
  secondary:
    "border border-navy/16 bg-white/72 text-navy shadow-[0_12px_26px_rgba(25,61,132,0.08)] backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/86 hover:shadow-[0_16px_34px_rgba(25,61,132,0.12)]",
  ghost: "text-navy hover:bg-navy/[0.08]",
};

export function CTAButton({
  href,
  children,
  className,
  variant = "primary",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300 ease-premium",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
