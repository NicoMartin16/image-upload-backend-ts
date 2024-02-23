/*
  Warnings:

  - You are about to drop the column `data` on the `Image` table. All the data in the column will be lost.
  - Added the required column `dataImage` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Image` DROP COLUMN `data`,
    ADD COLUMN `dataImage` VARCHAR(191) NOT NULL;
