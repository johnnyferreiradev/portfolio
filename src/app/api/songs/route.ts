import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Create a new BandSetSong
export async function POST(request: Request) {
  const { title, description, note } = await request.json();

  const song = await prisma.bandSetSong.create({
    data: { title, description, order: 1, note },
  });

  return NextResponse.json(song);
}

// Get all BandSetSongs
export async function GET() {
  const songs = await prisma.bandSetSong.findMany({
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(songs);
}
