import { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
  bg?: string;
};

export const Container = ({ children, bg }: ContainerProps) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center px-4 py-8">
      {children}

      {bg && (
        <img
          className="w-full h-full object-cover absolute l-0 t-0 -z-10 overflow-hidden opacity-80"
          src={bg}
          alt=""
        />
      )}
    </div>
  );
};
