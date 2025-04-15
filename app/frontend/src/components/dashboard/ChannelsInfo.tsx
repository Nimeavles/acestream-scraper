import Skeleton from "react-loading-skeleton";
import { Activity, CircleAlert, CircleCheckBig, Signal } from "lucide-react";
import { InformationCard } from "@/components/ui/InformationCard";
import { DataContext } from "@/contexts/DashboardDataContext";
import { useFetchContext } from "@/hooks/useFetchContext";
import { ApiStatus } from "@/interfaces/Status";
import "react-loading-skeleton/dist/skeleton.css";

export const ChannelsInfo = () => {
  const { data, error, loading } = useFetchContext<ApiStatus[]>(DataContext);

  return (
    <section className="flex flex-col md:flex-[100%] md:flex-row gap items-center justify-center mt-6 gap-4">
      <InformationCard
        name="Channels"
        icon={<Signal />}
        status={
          loading ? (
            <Skeleton
              baseColor="#26173c"
              highlightColor="#9d4eff"
              width={20}
              height={20}
            />
          ) : (
            data[0].total_channels ?? "0"
          )
        }
        className="bg-accent-lg text-fuchsia-300 dark:text-primary border-fuchsia-200 dark:bg-accent border dark:border-primary"
      />
      <InformationCard
        name="Checked"
        icon={<CircleCheckBig />}
        status={
          loading ? (
            <Skeleton
              baseColor="#092838"
              highlightColor="#193cb8"
              width={20}
              height={20}
            />
          ) : (
            data[0].channels_checked ?? "0"
          )
        }
        className="dark:bg-checked border dark:border-blue-900 bg-checked-lg border-blue-200 dark:text-blue-800 text-blue-300"
      />
      <InformationCard
        name="Online"
        icon={<Activity />}
        status={
          loading ? (
            <Skeleton
              baseColor="#08251e "
              highlightColor="#b9f8cf"
              width={20}
              height={20}
            />
          ) : (
            data[0].channels_online ?? "0"
          )
        }
        className="dark:bg-online bg-online-lg border dark:border-green-900 border-green-200 dark:text-green-800 text-green-400"
      />
      <InformationCard
        name="Offline"
        icon={<CircleAlert />}
        status={
          loading ? (
            <Skeleton
              baseColor="#270b14 "
              highlightColor="#9f0712"
              width={20}
              height={20}
            />
          ) : (
            data[0].channels_offline ?? "0"
          )
        }
        className="dark:bg-offline bg-offline-lg border dark:border-red-900 border-red-200 dark:text-red-800 text-red-400"
      />
    </section>
  );
};
