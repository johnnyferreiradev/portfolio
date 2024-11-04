import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { bandSetSongService } from "@/services/song";
import { BandSetSong } from "@prisma/client";

export function useSongs({ fetchEnable = true }) {
  const queryClient = useQueryClient();

  // GET: List all songs
  const { data: songs, isLoading: loadingSongs } = useQuery({
    queryKey: ["bandSetSongs"],
    queryFn: bandSetSongService.getAll,
    enabled: fetchEnable,
  });

  // GET: Fetch a single song by ID
  const {
    mutate: getSongById,
    data: selectedSong,
    isPending: loadingSingle,
  } = useMutation({
    mutationFn: (id: string) => bandSetSongService.getById(id),
  });

  // POST: Create a new song
  const { mutate: createSong, isPending: creating } = useMutation({
    mutationFn: (data: Partial<BandSetSong>) => bandSetSongService.create(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["bandSetSongs"] }),
  });

  // PUT: Update a song by ID
  const { mutate: updateSong, isPending: updating } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<BandSetSong> }) =>
      bandSetSongService.update(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["bandSetSongs"] }),
  });

  // DELETE: Delete a song by ID
  const { mutate: deleteSong, isPending: deleting } = useMutation({
    mutationFn: (id: string) => bandSetSongService.delete(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["bandSetSongs"] }),
  });

  return {
    songs,
    loadingSongs,
    selectedSong,
    loadingSingle,
    creating,
    updating,
    deleting,
    getSongById,
    createSong,
    updateSong,
    deleteSong,
  };
}
