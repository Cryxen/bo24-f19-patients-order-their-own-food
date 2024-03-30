/*
  Warnings:

  - You are about to drop the column `roomRoomNumber` on the `Allergy` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Allergy` DROP FOREIGN KEY `Allergy_roomRoomNumber_fkey`;

-- AlterTable
ALTER TABLE `Allergy` DROP COLUMN `roomRoomNumber`;
