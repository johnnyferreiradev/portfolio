import { useSongs } from "./useSongs";

export function useSongList() {
  const { loadingSongs, songs, deleteSong, deleting } = useSongs({
    fetchEnable: true,
  });

  return {
    loadingSongs,
    songs,
    deleteSong,
    deleting,
  };
}
