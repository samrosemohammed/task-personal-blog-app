import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}
export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn("mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
};
