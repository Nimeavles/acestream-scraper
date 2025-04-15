import { useFetch } from "@/hooks/useFetch";
import { DataContext } from "./DashboardDataContext";

const API_URLS_TO_FETCH = ["/api/stats/", "/api/channels/"];

export const DashboardDataProvider = <T,>({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, error, loading } = useFetch<T>(API_URLS_TO_FETCH);

  return (
    <DataContext.Provider value={{ data, error, loading }}>
      {children}
    </DataContext.Provider>
  );
};
