-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,
    "totalTaxes" REAL NOT NULL,
    "netValue" REAL NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "lastUpdate" DATETIME NOT NULL,
    "code" TEXT NOT NULL
);
