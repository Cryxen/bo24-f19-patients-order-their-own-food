/*
  Warnings:

  - You are about to drop the column `mealPlanId` on the `Meal` table. All the data in the column will be lost.
  - Made the column `imageUrl` on table `MealPlan` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Meal` DROP FOREIGN KEY `Meal_mealPlanId_fkey`;

-- AlterTable
ALTER TABLE `Meal` DROP COLUMN `mealPlanId`;

-- AlterTable
ALTER TABLE `MealPlan` MODIFY `imageUrl` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `MealToMealPlan` (
    `mealPlanId` INTEGER NOT NULL,
    `mealIdName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`mealPlanId`, `mealIdName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MealToMealPlan` ADD CONSTRAINT `MealToMealPlan_mealPlanId_fkey` FOREIGN KEY (`mealPlanId`) REFERENCES `MealPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MealToMealPlan` ADD CONSTRAINT `MealToMealPlan_mealIdName_fkey` FOREIGN KEY (`mealIdName`) REFERENCES `Meal`(`mealName`) ON DELETE RESTRICT ON UPDATE CASCADE;
