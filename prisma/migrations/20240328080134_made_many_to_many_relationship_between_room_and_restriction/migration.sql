/*
  Warnings:

  - You are about to drop the column `dietaryRestriction` on the `Room` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_dietaryRestriction_fkey`;

-- AlterTable
ALTER TABLE `Room` DROP COLUMN `dietaryRestriction`;

-- CreateTable
CREATE TABLE `RoomToRestriction` (
    `roomNumber` INTEGER NOT NULL,
    `dietaryRestriction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`, `dietaryRestriction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomToRestriction` ADD CONSTRAINT `RoomToRestriction_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToRestriction` ADD CONSTRAINT `RoomToRestriction_dietaryRestriction_fkey` FOREIGN KEY (`dietaryRestriction`) REFERENCES `Restriction`(`dietaryRestriction`) ON DELETE RESTRICT ON UPDATE CASCADE;
