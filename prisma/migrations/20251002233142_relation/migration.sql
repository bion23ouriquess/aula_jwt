-- CreateTable
CREATE TABLE `_produtosEmPedidos` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_produtosEmPedidos_AB_unique`(`A`, `B`),
    INDEX `_produtosEmPedidos_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_produtosEmPedidos` ADD CONSTRAINT `_produtosEmPedidos_A_fkey` FOREIGN KEY (`A`) REFERENCES `pedido`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_produtosEmPedidos` ADD CONSTRAINT `_produtosEmPedidos_B_fkey` FOREIGN KEY (`B`) REFERENCES `produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
