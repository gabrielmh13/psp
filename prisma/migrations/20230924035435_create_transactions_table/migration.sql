-- CreateTable
CREATE TABLE `transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `card_number` INTEGER NOT NULL,
    `card_owner` VARCHAR(191) NOT NULL,
    `validity` DATETIME(3) NOT NULL,
    `verification_code` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
