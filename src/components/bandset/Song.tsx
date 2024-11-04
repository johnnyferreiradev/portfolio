import { Edit, Trash } from "lucide-react";
import { Button } from "../ui/button";

interface Song {
  id: string;
  title: string;
  description?: string | null;
  note: string;
}

export default function Song({
  data,
  onEdit,
  onDelete,
  actionsDisabled,
}: {
  data: Song;
  onEdit: (song: Song) => void;
  onDelete: (id: string) => void;
  actionsDisabled: boolean;
}) {
  return (
    <div className="w-full border rounded-md p-4 flex justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <div>
          <p className="font-semibold text-lg">
            {data.title} - <span className="text-red-600">{data.note}</span>
          </p>
          <p className="text-lg text-slate-400 max-w-52 truncate">
            {data.description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => onDelete(data.id)}
          variant="outline"
          size="icon"
          disabled={actionsDisabled}
        >
          <Trash />
        </Button>
        <Button
          onClick={() => onEdit(data)}
          variant="outline"
          size="icon"
          disabled={actionsDisabled}
        >
          <Edit />
        </Button>
      </div>
    </div>
  );
}
