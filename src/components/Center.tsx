import { ReactNode } from "react";

export type CenterProps = {
  children: ReactNode;
};

export const Center = ({ children }: CenterProps) => {
  return <div className="flex justify-center">{children}</div>;
};
