import { Download, RefreshCcw } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const AcestreamPlaylist = () => {
  return (
    <section className="flex-[100%]">
      <Card icon={<Download size={30} />} title="Acestream Playlist">
        <div className="flex flex-wrap px-4 gap-4 justify-center not-dark:bg-white">
          <Input
            placeholder="https://example.com/list.m3u"
            className="lg:flex-1/3"
          />
          <div className="flex flex-col gap-2 flex-1 md:flex-row md:justify-center lg:justify-end">
            <Button className="bg-primary border-0">
              <span className="flex gap-2">
                <Download />
                <p>Download</p>
              </span>
            </Button>
            <Button>
              <span className="flex gap-2">
                <RefreshCcw />
                <p className="text-nowrap">Refresh & Download</p>
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};
