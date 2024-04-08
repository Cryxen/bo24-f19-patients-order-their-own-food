/*
  Warnings:

  - You are about to drop the column `orderId` on the `Room` table. All the data in the column will be lost.
  - Added the required column `roomNumber` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_orderId_fkey`;

-- AlterTable
ALTER TABLE `Order` ADD COLUMN `roomNumber` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Room` DROP COLUMN `orderId`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;
