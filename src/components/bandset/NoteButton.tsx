import { Button } from "../ui/button";

export const notes = {
  major: ["C", "D", "E", "F", "G", "A", "B"],
  majorSustenido: ["C#", "D#", "F#", "G#", "A#"],
  minus: ["Cm", "Dm", "Em", "Fm", "Gm", "Am", "Bm"],
  minusSustenido: ["C#m", "D#m", "F#m", "G#m", "A#m"],
};

export function NoteButton({
  value,
  onClick,
  selected,
  borderColor,
}: {
  value: string;
  onClick: (value: string) => void;
  selected: boolean;
  borderColor: string;
}) {
  return (
    <Button
      variant={selected ? "default" : "outline"}
      onClick={() => onClick(value)}
      style={{ borderColor }}
      size="sm"
      type="button"
    >
      {value}
    </Button>
  );
}
