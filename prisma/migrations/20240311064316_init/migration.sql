-- CreateTable
CREATE TABLE `User` (
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Meal` (
    `mealName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `dietaryInfo` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Meal_mealName_key`(`mealName`),
    PRIMARY KEY (`mealName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `roomNumber` INTEGER NOT NULL,
    `orderId` INTEGER NOT NULL,
    `dietaryRestriction` VARCHAR(191) NULL,

    UNIQUE INDEX `Room_roomNumber_key`(`roomNumber`),
    UNIQUE INDEX `Room_orderId_key`(`orderId`),
    UNIQUE INDEX `Room_dietaryRestriction_key`(`dietaryRestriction`),
    PRIMARY KEY (`roomNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MealPlan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MealToMealPlan` (
    `mealPlanId` INTEGER NOT NULL,
    `mealIdName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`mealPlanId`, `mealIdName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `meal` VARCHAR(191) NOT NULL,
    `mealPlanId` INTEGER NOT NULL,

    UNIQUE INDEX `Order_mealPlanId_key`(`mealPlanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PastOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomNumber` INTEGER NOT NULL,
    `meal` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Restriction` (
    `dietaryRestriction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`dietaryRestriction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_dietaryRestriction_fkey` FOREIGN KEY (`dietaryRestriction`) REFERENCES `Restriction`(`dietaryRestriction`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MealToMealPlan` ADD CONSTRAINT `MealToMealPlan_mealPlanId_fkey` FOREIGN KEY (`mealPlanId`) REFERENCES `MealPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MealToMealPlan` ADD CONSTRAINT `MealToMealPlan_mealIdName_fkey` FOREIGN KEY (`mealIdName`) REFERENCES `Meal`(`mealName`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_mealPlanId_fkey` FOREIGN KEY (`mealPlanId`) REFERENCES `MealPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
