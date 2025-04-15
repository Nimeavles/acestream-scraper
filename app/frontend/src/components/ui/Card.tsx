import { JSX } from "react";

interface Props {
  icon: JSX.Element;
  title: string;
  children: JSX.Element;
}

export const Card = ({ icon, title, children }: Props) => {
  return (
    <div className="hover:shadow-2xl transition-all ease-in flex  flex-col gap-4 not-dark:bg-white rounded shadow pb-4">
      <span className="flex items-center gap-2 rounded-t px-5 py-4 dark:bg-border bg-white">
        {icon}
        <p>{title}</p>
      </span>
      {children}
    </div>
  );
};
