/*
  Warnings:

  - The primary key for the `Document` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Document` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "totalTaxes" REAL NOT NULL,
    "netValue" REAL NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "lastUpdate" DATETIME NOT NULL,
    "code" TEXT NOT NULL
);
INSERT INTO "new_Document" ("code", "creationDate", "id", "issuer", "lastUpdate", "name", "netValue", "totalTaxes") SELECT "code", "creationDate", "id", "issuer", "lastUpdate", "name", "netValue", "totalTaxes" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
