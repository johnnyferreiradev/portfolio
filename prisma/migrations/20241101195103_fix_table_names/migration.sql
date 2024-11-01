-- CreateTable
CREATE TABLE "BandSetSong" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "order" INTEGER NOT NULL,
    "nodeId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BandSetSong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BandSetNote" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "BandSetNote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BandSetSong" ADD CONSTRAINT "BandSetSong_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "BandSetNote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
