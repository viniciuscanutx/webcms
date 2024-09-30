/*
  Warnings:

  - You are about to drop the column `senha` on the `Usuario` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "id", "nome", "poster") SELECT "email", "id", "nome", "poster" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
