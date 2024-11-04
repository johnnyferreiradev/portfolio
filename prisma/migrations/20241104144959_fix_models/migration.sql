/*
  Warnings:

  - You are about to drop the column `noteId` on the `BandSetSong` table. All the data in the column will be lost.
  - You are about to drop the `BandSetNote` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `note` to the `BandSetSong` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BandSetSong" DROP CONSTRAINT "BandSetSong_noteId_fkey";

-- AlterTable
ALTER TABLE "BandSetSong" DROP COLUMN "noteId",
ADD COLUMN     "note" TEXT NOT NULL;

-- DropTable
DROP TABLE "BandSetNote";
