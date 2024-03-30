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
CREATE TABLE `FoodConsistency` (
    `consistency` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`consistency`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Allergy` (
    `allergy` VARCHAR(191) NOT NULL,
    `roomRoomNumber` INTEGER NULL,

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
ALTER TABLE `Allergy` ADD CONSTRAINT `Allergy_roomRoomNumber_fkey` FOREIGN KEY (`roomRoomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE SET NULL ON UPDATE CASCADE;
