import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <Container className={cn("space-y-20 pb-20 sm:space-y-24 lg:space-y-28", className)}>
      {children}
    </Container>
  );
}
