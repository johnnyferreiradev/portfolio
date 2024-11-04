"use client";

import EditSong from "@/components/bandset/EditSong";
import NewSong from "@/components/bandset/NewSong";
import { PlayDialog } from "@/components/bandset/PlayDialog";
import Song from "@/components/bandset/Song";
import SongsHeader from "@/components/bandset/SongsHeader";
import { useSongList } from "@/hooks/useSongList";
import { useState } from "react";

export default function BandSet() {
  const { loadingSongs, songs, deleteSong, deleting } = useSongList();
  const [selectedSong, setSelectedSong] = useState<{
    id: string;
    title: string;
    description?: string | null;
    note: string;
  }>();

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeIsOpen = (value: boolean) => {
    setIsOpen(value);
  };

  const [newIsOpen, setNewIsOpen] = useState(false);

  const handleChangeNewIsOpen = (value: boolean) => {
    setNewIsOpen(value);
  };

  const handleDelete = (id: string) => {
    deleteSong(id);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full flex flex-col items-center p-6 py-16">
      <SongsHeader
        playDisabled={songs?.length === 0}
        onPlay={() => setIsPlaying(true)}
      />
      <div className="w-full max-w-screen-sm flex flex-col gap-4">
        {songs?.map((item) => (
          <Song
            data={item}
            onEdit={(data) => {
              setSelectedSong(data);
              setIsOpen(true);
            }}
            onDelete={(id) => handleDelete(id)}
            key={item.id}
            actionsDisabled={deleting}
          />
        ))}

        {!loadingSongs && songs?.length === 0 && (
          <p className="text-center mt-8">Não há músicas no repertório</p>
        )}

        {loadingSongs && (
          <p className="text-center mt-8 text-slate-400">Carregando...</p>
        )}
      </div>
      {selectedSong && isOpen && (
        <EditSong changeIsOpen={handleChangeIsOpen} songData={selectedSong} />
      )}

      {!loadingSongs && (
        <NewSong isOpen={newIsOpen} changeIsOpen={handleChangeNewIsOpen} />
      )}

      {!loadingSongs && songs && songs?.length > 0 && isPlaying && (
        <PlayDialog
          songs={songs.map((item) => ({
            note: item.note,
            description: item.description || "",
            title: item.title,
          }))}
          onClose={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
}
