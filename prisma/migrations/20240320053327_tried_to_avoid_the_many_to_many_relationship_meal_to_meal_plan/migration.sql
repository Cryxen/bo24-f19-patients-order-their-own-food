/*
  Warnings:

  - You are about to drop the `MealToMealPlan` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[mealPlanId]` on the table `Meal` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `MealToMealPlan` DROP FOREIGN KEY `MealToMealPlan_mealIdName_fkey`;

-- DropForeignKey
ALTER TABLE `MealToMealPlan` DROP FOREIGN KEY `MealToMealPlan_mealPlanId_fkey`;

-- AlterTable
ALTER TABLE `Meal` ADD COLUMN `mealPlanId` INTEGER NULL;

-- AlterTable
ALTER TABLE `MealPlan` MODIFY `imageUrl` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `MealToMealPlan`;

-- CreateIndex
CREATE UNIQUE INDEX `Meal_mealPlanId_key` ON `Meal`(`mealPlanId`);

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_mealPlanId_fkey` FOREIGN KEY (`mealPlanId`) REFERENCES `MealPlan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
