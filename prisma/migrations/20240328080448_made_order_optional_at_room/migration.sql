-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_orderId_fkey`;

-- AlterTable
ALTER TABLE `Room` MODIFY `orderId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
