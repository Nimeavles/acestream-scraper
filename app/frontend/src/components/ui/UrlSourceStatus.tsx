import { DataContext } from "@/contexts/DashboardDataContext";
import { URI } from "@/hooks/useFetch";
import { useFetchContext } from "@/hooks/useFetchContext";
import { DashboardData } from "@/interfaces/Dashboard";

interface Props {
  status: string;
  channels: number;
  url: string;
  enabled: boolean;
}

export const UrlSourceStatus = ({ status, channels, url, enabled }: Props) => {
  const { fetchData } = useFetchContext<DashboardData>(DataContext);

  const handleDeleteUrl = async () => {
    await fetch(`${URI}/api/urls/${encodeURIComponent(url)}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await fetchData();
  };

  const handleDisableUrl = async () => {
    await fetch(`${URI}/api/urls/${encodeURIComponent(url)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ enabled: !enabled }),
    });

    await fetchData();
  };

  return (
    <li
      className={`${
        status !== "OK"
          ? "dark:border-l-red-900 border-l-red-600"
          : "dark:border-green-600 border-green-400"
      }  border-l-4 rounded px-4 py-4 flex flex-col gap-2`}
    >
      <span className="flex gap-4">
        {status !== "OK" ? (
          <p className="dark:bg-red-900 bg-red-600 px-3 rounded">Error</p>
        ) : (
          <p className="dark:bg-green-600 bg-green-400 px-3 rounded">Ok</p>
        )}
        <p className="border rounded px-2">{channels} channels</p>
      </span>
      <p className="font-mono dark:text-gray-400 text-gray-800 text-wrap text-xs md:text-lg overflow-hidden whitespace-normal break-all">
        {url}
      </p>
      <div className="ml-4 md:ml-0 flex items-center justify-center gap-4">
        <button
          className="border rounded px-8 py-1 cursor-pointer"
          onClick={handleDisableUrl}
        >
          <p>{enabled ? "Disable" : "Enable"}</p>
        </button>
        <button
          className="dark:bg-red-900 bg-red-600 px-8 py-1 rounded cursor-pointer"
          onClick={handleDeleteUrl}
        >
          <p>Delete</p>
        </button>
      </div>
    </li>
  );
};
