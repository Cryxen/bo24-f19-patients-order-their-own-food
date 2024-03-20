/*
  Warnings:

  - Added the required column `description` to the `MealPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `MealPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MealPlan` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;
