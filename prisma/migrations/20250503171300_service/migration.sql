/*
  Warnings:

  - The values [CUSTOMER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `customerId` on the `feedback` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `subscriptions` table. All the data in the column will be lost.
  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `consumerId` to the `feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumerId` to the `subscriptions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('TIFFIN', 'DINEIN', 'BOTH');

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('CONSUMER', 'PROVIDER', 'ADMIN');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_userId_fkey";

-- DropForeignKey
ALTER TABLE "feedback" DROP CONSTRAINT "feedback_customerId_fkey";

-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_customerId_fkey";

-- DropIndex
DROP INDEX "subscriptions_customerId_idx";

-- AlterTable
ALTER TABLE "feedback" DROP COLUMN "customerId",
ADD COLUMN     "consumerId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "providers" ADD COLUMN     "serviceType" "ServiceType";

-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "customerId",
ADD COLUMN     "consumerId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "role" DROP DEFAULT;

-- DropTable
DROP TABLE "customers";

-- CreateTable
CREATE TABLE "consumers" (
    "userId" UUID NOT NULL,
    "address" TEXT NOT NULL,
    "preferences" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "consumers_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE INDEX "subscriptions_consumerId_idx" ON "subscriptions"("consumerId");

-- AddForeignKey
ALTER TABLE "consumers" ADD CONSTRAINT "consumers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "consumers"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_consumerId_fkey" FOREIGN KEY ("consumerId") REFERENCES "consumers"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
