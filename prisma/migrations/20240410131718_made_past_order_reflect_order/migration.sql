/*
  Warnings:

  - You are about to drop the column `meal` on the `PastOrder` table. All the data in the column will be lost.
  - Added the required column `mainDish` to the `PastOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sideDish` to the `PastOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `PastOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PastOrder` DROP COLUMN `meal`,
    ADD COLUMN `mainDish` VARCHAR(191) NOT NULL,
    ADD COLUMN `sideDish` VARCHAR(191) NOT NULL,
    ADD COLUMN `size` DECIMAL(65, 30) NOT NULL;
