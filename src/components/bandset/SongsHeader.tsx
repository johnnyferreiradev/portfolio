import { Play } from "lucide-react";
import { Button } from "../ui/button";

export default function SongsHeader({
  playDisabled,
}: {
  playDisabled: boolean;
}) {
  return (
    <div className="w-full max-w-screen-sm flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">Repertório</h3>
      <Button
        size="sm"
        className="bg-green-500 hover:bg-green-600"
        disabled={playDisabled}
      >
        <Play />
        <span className="text-base ml-2">Iniciar</span>
      </Button>
    </div>
  );
}
