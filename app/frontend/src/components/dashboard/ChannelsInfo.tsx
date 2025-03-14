import { InformationCard } from "@/components/InformationCard";
import { Activity, CircleAlert, CircleCheckBig, Signal } from "lucide-react";

export const ChannelsInfo = () => {
  return (
    <section className="flex flex-col md:flex-row gap items-center justify-center mt-6 gap-4">
      <InformationCard
        name="Channels"
        icon={<Signal />}
        status="0"
        className="bg-accent-lg text-fuchsia-300 dark:text-primary border-fuchsia-200 dark:bg-accent border dark:border-primary"
      />
      <InformationCard
        name="Checked"
        icon={<CircleCheckBig />}
        status="0"
        className="dark:bg-checked border dark:border-blue-900 bg-checked-lg border-blue-200 dark:text-blue-800 text-blue-300"
      />
      <InformationCard
        name="Online"
        icon={<Activity />}
        status="0"
        className="dark:bg-online bg-online-lg border dark:border-green-900 border-green-200 dark:text-green-800 text-green-400"
      />
      <InformationCard
        name="Offline"
        icon={<CircleAlert />}
        status="0"
        className="dark:bg-offline bg-offline-lg border dark:border-red-900 border-red-200 dark:text-red-800 text-red-400"
      />
    </section>
  );
};
