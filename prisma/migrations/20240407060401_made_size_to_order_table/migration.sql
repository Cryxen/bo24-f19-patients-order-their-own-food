/*
  Warnings:

  - You are about to drop the column `meal` on the `Order` table. All the data in the column will be lost.
  - Made the column `imageUrl` on table `MealPlan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `MealPlan` MODIFY `imageUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `meal`,
    ADD COLUMN `size` INTEGER NOT NULL DEFAULT 1;
