import { DataContextType } from "@/contexts/DashboardDataContext";
import { useContext } from "react";

export function useFetchContext<T>(
  ctx: React.Context<DataContextType<unknown>>
) {
  const context = useContext(ctx);
  if (!context)
    throw new Error("useFetchContext needs to be inside FetchProvider");
  return context as DataContextType<T>;
}
