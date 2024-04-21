/*
  Warnings:

  - You are about to drop the `RoomToRestriction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `RoomToRestriction` DROP FOREIGN KEY `RoomToRestriction_dietaryRestriction_fkey`;

-- DropForeignKey
ALTER TABLE `RoomToRestriction` DROP FOREIGN KEY `RoomToRestriction_roomNumber_fkey`;

-- DropTable
DROP TABLE `RoomToRestriction`;

-- CreateTable
CREATE TABLE `RoomToDietaryRestrictions` (
    `roomNumber` INTEGER NOT NULL,
    `dietaryRestrictionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`, `dietaryRestrictionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomToDietaryRestrictions` ADD CONSTRAINT `RoomToDietaryRestrictions_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToDietaryRestrictions` ADD CONSTRAINT `RoomToDietaryRestrictions_dietaryRestrictionId_fkey` FOREIGN KEY (`dietaryRestrictionId`) REFERENCES `Restriction`(`dietaryRestriction`) ON DELETE RESTRICT ON UPDATE CASCADE;
