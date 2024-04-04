/*
  Warnings:

  - You are about to drop the `Restriction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `RoomToDietaryRestrictions` DROP FOREIGN KEY `RoomToDietaryRestrictions_dietaryRestrictionId_fkey`;

-- DropTable
DROP TABLE `Restriction`;

-- CreateTable
CREATE TABLE `DietaryRestriction` (
    `dietaryRestriction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`dietaryRestriction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomToDietaryRestrictions` ADD CONSTRAINT `RoomToDietaryRestrictions_dietaryRestrictionId_fkey` FOREIGN KEY (`dietaryRestrictionId`) REFERENCES `DietaryRestriction`(`dietaryRestriction`) ON DELETE RESTRICT ON UPDATE CASCADE;
