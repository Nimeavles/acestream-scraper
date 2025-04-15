import { AcestreamPlaylist } from "@/components/dashboard/AcestreamPlaylist";
import { AddNewUrl } from "@/components/dashboard/AddNewUrl";
import { ChannelManagment } from "@/components/dashboard/ChannelManagment";
import { ChannelsInfo } from "@/components/dashboard/ChannelsInfo";
import { PageLayout } from "@/components/PageLayout";
import { DashboardDataProvider } from "@/contexts/DashboardDataProvider";

export const HomePage = () => {
  return (
    <PageLayout>
      <DashboardDataProvider>
        <ChannelsInfo />
        <AcestreamPlaylist />
        <AddNewUrl />
        <ChannelManagment />
      </DashboardDataProvider>
    </PageLayout>
  );
};
