/*
  Warnings:

  - You are about to drop the `_produtosempedidos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_produtosempedidos` DROP FOREIGN KEY `_produtosEmPedidos_A_fkey`;

-- DropForeignKey
ALTER TABLE `_produtosempedidos` DROP FOREIGN KEY `_produtosEmPedidos_B_fkey`;

-- DropTable
DROP TABLE `_produtosempedidos`;

-- CreateTable
CREATE TABLE `produtosEmPedidos` (
    `id_pedido` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,

    PRIMARY KEY (`id_pedido`, `id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_pedidoToproduto` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_pedidoToproduto_AB_unique`(`A`, `B`),
    INDEX `_pedidoToproduto_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produtosEmPedidos` ADD CONSTRAINT `produtosEmPedidos_id_pedido_fkey` FOREIGN KEY (`id_pedido`) REFERENCES `pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtosEmPedidos` ADD CONSTRAINT `produtosEmPedidos_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_pedidoToproduto` ADD CONSTRAINT `_pedidoToproduto_A_fkey` FOREIGN KEY (`A`) REFERENCES `pedido`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_pedidoToproduto` ADD CONSTRAINT `_pedidoToproduto_B_fkey` FOREIGN KEY (`B`) REFERENCES `produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
