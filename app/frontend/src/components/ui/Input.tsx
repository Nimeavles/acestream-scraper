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
  name?: string;
}

export const Input = ({ placeholder, className, type, name }: Props) => {
  return (
    <input
      placeholder={placeholder}
      autoComplete="off"
      type={type ?? "text"}
      name={name}
      className={`p-2.5 border rounded flex-[100%] font-mono dark:text-white text-black ${className}`}
    />
  );
};
