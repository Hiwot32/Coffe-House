/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `coffee_products` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `pastriy_products` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tea_products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `coffee_products` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `pastriy_products` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `tea_products` DROP COLUMN `updatedAt`;
