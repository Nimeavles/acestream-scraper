import { Plus } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { UrlSourceStatus } from "@/components/ui/UrlSourceStatus";
import { useFetchContext } from "@/hooks/useFetchContext";
import { DataContext } from "@/contexts/DashboardDataContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DashboardData } from "@/interfaces/Dashboard";
import { URI } from "@/hooks/useFetch";

export const AddNewUrl = () => {
  const { data, error, loading, fetchData } =
    useFetchContext<DashboardData>(DataContext);

  const handleAddUrl = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = (e.target as HTMLFormElement).url.value;

    await fetch(`${URI}/api/urls/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    await fetchData();
  };

  return (
    <section className="flex-1/3">
      <Card title="Add New URL" icon={<Plus size={30} />}>
        <div className="px-4 flex flex-col gap-4">
          <form className="flex flex-col gap-4" onSubmit={handleAddUrl}>
            <Input name="url" placeholder="Enter URL to scrape" type="url" />
            <Button className="bg-primary border-0">
              <span className="flex gap-2 justify-center">
                <Plus />
                <p>Add URL</p>
              </span>
            </Button>
          </form>
          <hr className="dark:text-gray-600 text-background" />
          <span className="flex gap-4 items-center">
            <p>URL Source</p>
            {loading ? (
              <Skeleton
                width={50}
                height={20}
                baseColor="#9d4eff"
                highlightColor="white"
              />
            ) : (
              <p className="border rounded px-2">{data.urls.length} sources</p>
            )}
          </span>
          {loading ? (
            <Skeleton baseColor="#9d4eff" highlightColor="white" count={3} />
          ) : (
            <ul className="flex flex-col gap-4 overflow-hidden overflow-y-scroll max-h-64">
              {data.urls.map((url, index) => (
                <UrlSourceStatus
                  key={index}
                  status={url.status}
                  channels={url.channels}
                  url={url.url}
                  enabled={url.enabled}
                />
              ))}
            </ul>
          )}
        </div>
      </Card>
    </section>
  );
};
