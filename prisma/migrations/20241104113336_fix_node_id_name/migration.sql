/*
  Warnings:

  - You are about to drop the column `nodeId` on the `BandSetSong` table. All the data in the column will be lost.
  - Added the required column `noteId` to the `BandSetSong` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BandSetSong" DROP CONSTRAINT "BandSetSong_nodeId_fkey";

-- AlterTable
ALTER TABLE "BandSetSong" DROP COLUMN "nodeId",
ADD COLUMN     "noteId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BandSetSong" ADD CONSTRAINT "BandSetSong_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "BandSetNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
