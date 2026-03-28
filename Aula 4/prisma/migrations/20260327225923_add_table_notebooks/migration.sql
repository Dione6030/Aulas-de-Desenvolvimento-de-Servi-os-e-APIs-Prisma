-- CreateTable
CREATE TABLE `notebooks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(200) NOT NULL,
    `marca` VARCHAR(200) NOT NULL,
    `processador` ENUM('Intel', 'AMD') NOT NULL,
    `preco` DECIMAL(10, 2) NOT NULL,
    `quantidade` SMALLINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
