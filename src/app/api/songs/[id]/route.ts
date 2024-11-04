import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get a single BandSetSong
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const song = await prisma.bandSetSong.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(song);
}

// Update a BandSetSong
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { title, description, note } = await request.json();

  const updatedSong = await prisma.bandSetSong.update({
    where: { id: params.id },
    data: { title, description, order: 1, note },
  });

  return NextResponse.json(updatedSong);
}

// Delete a BandSetSong
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log('aaaaaaaa')

  await prisma.bandSetSong.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "Song deleted successfully" });
}
