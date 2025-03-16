type InputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface Props {
  placeholder: string;
  className?: string;
  type?: InputTypes;
}

export const Input = ({ placeholder, className, type }: Props) => {
  return (
    <input
      placeholder={placeholder}
      autoComplete="off"
      type={type ?? "text"}
      className={`p-2.5 border rounded flex-[100%] font-mono dark:text-white text-black ${className}`}
    />
  );
};
