import { Plus, RefreshCcw, Search, Signal } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { TableChannelManagment } from "./TableChannelManagment";

export const ChannelManagment = () => {
  return (
    <section className="flex-auto">
      <Card icon={<Signal size={25} />} title="Channel Management">
        <div className="px-4 flex flex-col gap-4">
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <p>Add Channel Manually</p>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <Input placeholder="Channel Id" />
              <Input placeholder="Channel Name" />
              <Button className="bg-primary border-0">
                <span className="flex gap-2 justify-center">
                  <Plus />
                  <p className="text-nowrap">Add Channel</p>
                </span>
              </Button>
            </div>
          </form>

          <div className="flex flex-col gap-2">
            <div className="flex items-centergap-4 justify-between">
              <span className="flex gap-2 items-center">
                <p>Channels</p>
                <p className="border rounded px-2">1 sources</p>
              </span>
              <Button className="p-2! border-0">
                <RefreshCcw />
              </Button>
            </div>
            <div className="">
              <div className="border flex px-2 items-center rounded">
                <div className="">
                  <Search size={20} className="box-content " />
                </div>
                <Input
                  className="border-0 focus:outline-0"
                  placeholder="Search Channels..."
                />
              </div>
            </div>
          </div>
          <TableChannelManagment />
        </div>
      </Card>
    </section>
  );
};
