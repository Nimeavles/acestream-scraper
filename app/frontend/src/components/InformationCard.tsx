import { JSX } from "react";

interface Props {
  name: string;
  status: string | number | null | JSX.Element;
  icon: JSX.Element;
  className?: string;
}

export const InformationCard = ({ name, status, icon, className }: Props) => {
  return (
    <div
      className={`w-full md:flex-1/2 flex items-center gap-5 px-5 py-2 lg:px-7 lg-py:3 rounded shadow-xl ${className}`}
    >
      {icon}
      <span className="flex flex-col">
        <p className="text-md font-medium text-black dark:text-gray-300">
          {name}
        </p>
        <p className="font-bold text-xl">{status}</p>
      </span>
    </div>
  );
};
