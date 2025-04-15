import { useFetch } from "@/hooks/useFetch";
import { DataContext } from "./DashboardDataContext";
import { DashboardData } from "@/interfaces/Dashboard";

const API_URLS_TO_FETCH: Record<keyof DashboardData, string> = {
  stats: "/api/stats/",
  channels: "/api/channels/",
  urls: "/api/urls/",
};

export const DashboardDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, error, loading, fetchData } =
    useFetch<DashboardData>(API_URLS_TO_FETCH);

  return (
    <DataContext.Provider value={{ data, error, loading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
