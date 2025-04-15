import { Plus, Signal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const TableChannelManagment = () => {
  return (
    <div className="flex flex-col gap-4 h-auto">
      <p className="dark:text-gray-500 text-black">
        Search results will be applied to the playlist when downloading
      </p>
      <div className="overflow-x-auto border rounded">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="p-2">
                <p>Name</p>
              </th>
              <th className="p-2">
                <p>ID</p>
              </th>
              <th className="p-2">
                <p>Last Updated</p>
              </th>
              <th className="p-2">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
        </table>
        <div className="flex flex-col items-center py-4 gap-4">
          <span>
            <Signal className="m-auto" size={50} />
            <p>No channels found</p>
          </span>
          <Button>
            <span className="flex gap-2">
              <Plus />
              <p>Add your first channel</p>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
