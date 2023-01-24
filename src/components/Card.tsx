import { ReactNode } from "react";
import clsx from "clsx";

export type CardProps = {
  children: ReactNode;
  shadow?: boolean;
  className?: string;
};

export const Card = ({ children, shadow, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "border border-gray rounded-md p-4 text-gray-900 w-96 opacity-95",
        shadow && "shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};
