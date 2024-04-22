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
    `category` VARCHAR(191) NOT NULL,
    `dietaryInfo` VARCHAR(191) NULL,
    `imageUrl` VARCHAR(191) NULL,

    UNIQUE INDEX `Meal_mealName_key`(`mealName`),
    PRIMARY KEY (`mealName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `roomNumber` INTEGER NOT NULL,

    UNIQUE INDEX `Room_roomNumber_key`(`roomNumber`),
    PRIMARY KEY (`roomNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomToDietaryRestrictions` (
    `roomNumber` INTEGER NOT NULL,
    `dietaryRestrictionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`, `dietaryRestrictionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomToFoodConsistencyRestrictions` (
    `roomNumber` INTEGER NOT NULL,
    `foodConsistencyRestrictionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`, `foodConsistencyRestrictionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomToAllergyRestrictions` (
    `roomNumber` INTEGER NOT NULL,
    `allergyRestricionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`, `allergyRestricionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomToIntolleranceRestrictions` (
    `roomNumber` INTEGER NOT NULL,
    `intolleranceRestrictionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`, `intolleranceRestrictionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoomToDietaryneeds` (
    `roomNumber` INTEGER NOT NULL,
    `dietaryNeedId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`, `dietaryNeedId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DietaryRestriction` (
    `dietaryRestriction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`dietaryRestriction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodConsistency` (
    `consistency` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`consistency`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Allergy` (
    `allergy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`allergy`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Intolerance` (
    `intolerance` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`intolerance`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DietaryNeeds` (
    `dietaryNeed` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`dietaryNeed`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MealPlan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

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
    `size` DECIMAL(65, 30) NOT NULL DEFAULT 1,
    `roomNumber` INTEGER NOT NULL,
    `mealPlanId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PastOrder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `roomNumber` INTEGER NOT NULL,
    `mainDish` VARCHAR(191) NOT NULL,
    `sideDish` VARCHAR(191) NOT NULL,
    `size` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `messageID` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `room` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`messageID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomToDietaryRestrictions` ADD CONSTRAINT `RoomToDietaryRestrictions_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToDietaryRestrictions` ADD CONSTRAINT `RoomToDietaryRestrictions_dietaryRestrictionId_fkey` FOREIGN KEY (`dietaryRestrictionId`) REFERENCES `DietaryRestriction`(`dietaryRestriction`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToFoodConsistencyRestrictions` ADD CONSTRAINT `RoomToFoodConsistencyRestrictions_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToFoodConsistencyRestrictions` ADD CONSTRAINT `RoomToFoodConsistencyRestrictions_foodConsistencyRestrictio_fkey` FOREIGN KEY (`foodConsistencyRestrictionId`) REFERENCES `FoodConsistency`(`consistency`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToAllergyRestrictions` ADD CONSTRAINT `RoomToAllergyRestrictions_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToAllergyRestrictions` ADD CONSTRAINT `RoomToAllergyRestrictions_allergyRestricionId_fkey` FOREIGN KEY (`allergyRestricionId`) REFERENCES `Allergy`(`allergy`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToIntolleranceRestrictions` ADD CONSTRAINT `RoomToIntolleranceRestrictions_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToIntolleranceRestrictions` ADD CONSTRAINT `RoomToIntolleranceRestrictions_intolleranceRestrictionId_fkey` FOREIGN KEY (`intolleranceRestrictionId`) REFERENCES `Intolerance`(`intolerance`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToDietaryneeds` ADD CONSTRAINT `RoomToDietaryneeds_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomToDietaryneeds` ADD CONSTRAINT `RoomToDietaryneeds_dietaryNeedId_fkey` FOREIGN KEY (`dietaryNeedId`) REFERENCES `DietaryNeeds`(`dietaryNeed`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MealToMealPlan` ADD CONSTRAINT `MealToMealPlan_mealPlanId_fkey` FOREIGN KEY (`mealPlanId`) REFERENCES `MealPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MealToMealPlan` ADD CONSTRAINT `MealToMealPlan_mealIdName_fkey` FOREIGN KEY (`mealIdName`) REFERENCES `Meal`(`mealName`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_mealPlanId_fkey` FOREIGN KEY (`mealPlanId`) REFERENCES `MealPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
