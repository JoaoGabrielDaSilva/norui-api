-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Table" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" TEXT NOT NULL,
    "restaurantId" TEXT,
    CONSTRAINT "Table_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Table" ("id", "number", "restaurantId") SELECT "id", "number", "restaurantId" FROM "Table";
DROP TABLE "Table";
ALTER TABLE "new_Table" RENAME TO "Table";
CREATE UNIQUE INDEX "Table_restaurantId_key" ON "Table"("restaurantId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
