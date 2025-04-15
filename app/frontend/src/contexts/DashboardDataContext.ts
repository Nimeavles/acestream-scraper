import { createContext } from "react";

export type DataContextType<T> = {
  loading: boolean;
  error: string | null;
  data: T;
};

export const DataContext = createContext<DataContextType<unknown>>(
  {} as DataContextType<unknown>
);
