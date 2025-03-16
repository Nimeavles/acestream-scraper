import { AcestreamPlaylist } from "@/components/dashboard/AcestreamPlaylist";
import { AddNewUrl } from "@/components/dashboard/AddNewUrl";
import { ChannelManagment } from "@/components/dashboard/ChannelManagment";
import { ChannelsInfo } from "@/components/dashboard/ChannelsInfo";
import { PageLayout } from "@/components/PageLayout";

export const HomePage = () => {
  return (
    <PageLayout>
      <ChannelsInfo />
      <AcestreamPlaylist />
      <AddNewUrl />
      <ChannelManagment />
    </PageLayout>
  );
};
