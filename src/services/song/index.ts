import axios from "axios";
import { BandSetSong } from "@prisma/client";

export const bandSetSongService = {
  async getAll(): Promise<BandSetSong[]> {
    const response = await axios.get("/api/songs");
    return response.data;
  },
  async getById(id: string): Promise<BandSetSong> {
    const response = await axios.get(`/api/songs/${id}`);
    return response.data;
  },
  async create(data: Partial<BandSetSong>): Promise<BandSetSong> {
    const response = await axios.post("/api/songs", data);
    return response.data;
  },
  async update(id: string, data: Partial<BandSetSong>): Promise<BandSetSong> {
    const response = await axios.put(`/api/songs/${id}`, data);
    return response.data;
  },
  async delete(id: string): Promise<void> {
    await axios.delete(`/api/songs/${id}`);
  },
};
