"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { useMemo, useState } from "react";

interface Song {
  title: string;
  description?: string;
  note: string;
}

interface PlayDialogProps {
  songs: Song[];
  onClose: () => void;
}

export function PlayDialog({ songs, onClose }: PlayDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSong = useMemo(() => songs[currentIndex], [currentIndex]);
  const nextSong = useMemo(() => {
    if (songs[currentIndex + 1]) {
      return songs[currentIndex + 1];
    }
    return null;
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <Dialog open>
      <DialogContent className="w-screen max-w-full h-screen bg-zinc-900 border-zinc-900 text-white p-0">
        <div className="w-full flex justify-end h-max">
          <Button variant="link" onClick={onClose}>
            <X className="text-white" />
          </Button>
        </div>
        <div className="flex-1 w-full flex justify-between items-center gap-4">
          <Button
            variant="link"
            className="min-h-32"
            disabled={currentIndex === 0}
            onClick={handlePrevious}
          >
            <ChevronLeft className="text-white" />
          </Button>
          {!!currentSong && (
            <div className="w-full text-center">
              <h3 className="text-7xl font-bold text-green-400">
                {currentSong.note}
              </h3>
              <h2 className="text-5xl font-bold my-4">{currentSong.title}</h2>
              <p className="text-xl text-zinc-400">{currentSong.description}</p>
            </div>
          )}
          <Button
            variant="link"
            className="min-h-32"
            disabled={currentIndex === songs.length - 1}
            onClick={handleNext}
          >
            <ChevronRight className="text-white" />
          </Button>
        </div>
        {!!nextSong ? (
          <div className="text-center pt-8">
            <p className="text-zinc-500">Próxima:</p>
            <p className="text-xl">
              {nextSong.title} -{" "}
              <span className="text-green-400 font-bold">{nextSong.note}</span>
            </p>
          </div>
        ) : (
          <span></span>
        )}
      </DialogContent>
    </Dialog>
  );
}
