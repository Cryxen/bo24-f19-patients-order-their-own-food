-- CreateTable
CREATE TABLE `User` (
    `email` VARCHAR(191) NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Role` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Meal` (
    `MealName` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `DietaryInfo` VARCHAR(191) NOT NULL,
    `ImageUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Meal_MealName_key`(`MealName`),
    PRIMARY KEY (`MealName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `RoomNumber` INTEGER NOT NULL,
    `OrderId` INTEGER NOT NULL,
    `DietaryRestriction` VARCHAR(191) NULL,

    UNIQUE INDEX `Room_RoomNumber_key`(`RoomNumber`),
    UNIQUE INDEX `Room_OrderId_key`(`OrderId`),
    UNIQUE INDEX `Room_DietaryRestriction_key`(`DietaryRestriction`),
    PRIMARY KEY (`RoomNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MealPlan` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Meal` VARCHAR(191) NOT NULL,
    `MealPlanId` INTEGER NOT NULL,

    UNIQUE INDEX `Order_MealPlanId_key`(`MealPlanId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PastOrder` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `RoomNumber` INTEGER NOT NULL,
    `Meal` VARCHAR(191) NOT NULL,
    `Date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Restriction` (
    `DietaryRestriction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`DietaryRestriction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MealToMealPlan` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MealToMealPlan_AB_unique`(`A`, `B`),
    INDEX `_MealToMealPlan_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_OrderId_fkey` FOREIGN KEY (`OrderId`) REFERENCES `Order`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_DietaryRestriction_fkey` FOREIGN KEY (`DietaryRestriction`) REFERENCES `Restriction`(`DietaryRestriction`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_MealPlanId_fkey` FOREIGN KEY (`MealPlanId`) REFERENCES `MealPlan`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MealToMealPlan` ADD CONSTRAINT `_MealToMealPlan_A_fkey` FOREIGN KEY (`A`) REFERENCES `Meal`(`MealName`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MealToMealPlan` ADD CONSTRAINT `_MealToMealPlan_B_fkey` FOREIGN KEY (`B`) REFERENCES `MealPlan`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
