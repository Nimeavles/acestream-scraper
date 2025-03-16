import { Plus } from "lucide-react";
import { Card } from "../Card";
import { Button } from "../Button";
import { Input } from "../Input";

export const AddNewUrl = () => {
  return (
    <section className="flex-auto">
      <Card title="Add New URL" icon={<Plus size={30} />}>
        <div className="px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Input placeholder="Enter URL to scrape" />
            <Button className="bg-primary border-0">
              <span className="flex gap-2 justify-center">
                <Plus />
                <p>Add URL</p>
              </span>
            </Button>
          </div>
          <hr className="dark:text-gray-600 text-background" />
          <span className="flex gap-4 items-center">
            <p>URL Source</p>
            <p className="border rounded px-2">1 sources</p>
          </span>
          <div className="dark:border-l-red-900 border-l-red-600 border-l-4 rounded px-4 py-4 flex flex-col gap-2">
            <span className="flex gap-4">
              <p className="dark:bg-red-900 bg-red-600 px-3 rounded">Error</p>
              <p className="border rounded px-2">0 channels</p>
            </span>
            <p className="font-mono dark:text-gray-400 text-gray-800 text-wrap text-xs md:text-lg overflow-hidden whitespace-normal break-all">
              http://127.0.0.1:43110/1JKe3VPvFe35bm1aiHdD4p1xcGCkZKhH3Q
            </p>
            <div className="ml-4 md:ml-0 flex items-center justify-center gap-4">
              <button className="border rounded px-8 py-1 cursor-pointer">
                <p>Disable</p>
              </button>
              <button className="dark:bg-red-900 bg-red-600 px-8 py-1 rounded cursor-pointer">
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
