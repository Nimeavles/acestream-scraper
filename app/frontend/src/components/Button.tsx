import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`cursor-pointer px-5 py-3 rounded border ${className}`}>
      {children}
    </button>
  );
};
