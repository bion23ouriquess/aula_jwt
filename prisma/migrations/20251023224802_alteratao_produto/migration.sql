/*
  Warnings:

  - You are about to drop the column `descricao` on the `produto` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `produto` table. All the data in the column will be lost.
  - Added the required column `ano` to the `produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloco` to the `produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cambio` to the `produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cor` to the `produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motor` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produto` DROP COLUMN `descricao`,
    DROP COLUMN `nome`,
    ADD COLUMN `ano` INTEGER NOT NULL,
    ADD COLUMN `bloco` JSON NOT NULL,
    ADD COLUMN `cambio` VARCHAR(191) NOT NULL,
    ADD COLUMN `cor` VARCHAR(191) NOT NULL,
    ADD COLUMN `marca` VARCHAR(191) NOT NULL,
    ADD COLUMN `modelo` VARCHAR(191) NOT NULL,
    ADD COLUMN `motor` VARCHAR(191) NOT NULL,
    MODIFY `preco` DECIMAL(65, 30) NOT NULL;
