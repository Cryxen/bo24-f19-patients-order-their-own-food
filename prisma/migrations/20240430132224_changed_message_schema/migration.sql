-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Meal" (
    "mealName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "dietaryInfo" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("mealName")
);

-- CreateTable
CREATE TABLE "Room" (
    "roomNumber" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("roomNumber")
);

-- CreateTable
CREATE TABLE "RoomToDietaryRestrictions" (
    "roomNumber" INTEGER NOT NULL,
    "dietaryRestrictionId" TEXT NOT NULL,

    CONSTRAINT "RoomToDietaryRestrictions_pkey" PRIMARY KEY ("roomNumber","dietaryRestrictionId")
);

-- CreateTable
CREATE TABLE "RoomToFoodConsistencyRestrictions" (
    "roomNumber" INTEGER NOT NULL,
    "foodConsistencyRestrictionId" TEXT NOT NULL,

    CONSTRAINT "RoomToFoodConsistencyRestrictions_pkey" PRIMARY KEY ("roomNumber","foodConsistencyRestrictionId")
);

-- CreateTable
CREATE TABLE "RoomToAllergyRestrictions" (
    "roomNumber" INTEGER NOT NULL,
    "allergyRestricionId" TEXT NOT NULL,

    CONSTRAINT "RoomToAllergyRestrictions_pkey" PRIMARY KEY ("roomNumber","allergyRestricionId")
);

-- CreateTable
CREATE TABLE "RoomToIntolleranceRestrictions" (
    "roomNumber" INTEGER NOT NULL,
    "intolleranceRestrictionId" TEXT NOT NULL,

    CONSTRAINT "RoomToIntolleranceRestrictions_pkey" PRIMARY KEY ("roomNumber","intolleranceRestrictionId")
);

-- CreateTable
CREATE TABLE "RoomToDietaryneeds" (
    "roomNumber" INTEGER NOT NULL,
    "dietaryNeedId" TEXT NOT NULL,

    CONSTRAINT "RoomToDietaryneeds_pkey" PRIMARY KEY ("roomNumber","dietaryNeedId")
);

-- CreateTable
CREATE TABLE "DietaryRestriction" (
    "dietaryRestriction" TEXT NOT NULL,

    CONSTRAINT "DietaryRestriction_pkey" PRIMARY KEY ("dietaryRestriction")
);

-- CreateTable
CREATE TABLE "FoodConsistency" (
    "consistency" TEXT NOT NULL,

    CONSTRAINT "FoodConsistency_pkey" PRIMARY KEY ("consistency")
);

-- CreateTable
CREATE TABLE "Allergy" (
    "allergy" TEXT NOT NULL,

    CONSTRAINT "Allergy_pkey" PRIMARY KEY ("allergy")
);

-- CreateTable
CREATE TABLE "Intolerance" (
    "intolerance" TEXT NOT NULL,

    CONSTRAINT "Intolerance_pkey" PRIMARY KEY ("intolerance")
);

-- CreateTable
CREATE TABLE "DietaryNeeds" (
    "dietaryNeed" TEXT NOT NULL,

    CONSTRAINT "DietaryNeeds_pkey" PRIMARY KEY ("dietaryNeed")
);

-- CreateTable
CREATE TABLE "MealPlan" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MealPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealToMealPlan" (
    "mealPlanId" INTEGER NOT NULL,
    "mealIdName" TEXT NOT NULL,

    CONSTRAINT "MealToMealPlan_pkey" PRIMARY KEY ("mealPlanId","mealIdName")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "size" DECIMAL(65,30) NOT NULL DEFAULT 1,
    "roomNumber" INTEGER NOT NULL,
    "mealPlanId" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastOrder" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL,
    "mainDish" TEXT NOT NULL,
    "sideDish" TEXT NOT NULL,
    "size" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PastOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "messageID" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("messageID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Meal_mealName_key" ON "Meal"("mealName");

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomNumber_key" ON "Room"("roomNumber");

-- AddForeignKey
ALTER TABLE "RoomToDietaryRestrictions" ADD CONSTRAINT "RoomToDietaryRestrictions_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("roomNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToDietaryRestrictions" ADD CONSTRAINT "RoomToDietaryRestrictions_dietaryRestrictionId_fkey" FOREIGN KEY ("dietaryRestrictionId") REFERENCES "DietaryRestriction"("dietaryRestriction") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToFoodConsistencyRestrictions" ADD CONSTRAINT "RoomToFoodConsistencyRestrictions_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("roomNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToFoodConsistencyRestrictions" ADD CONSTRAINT "RoomToFoodConsistencyRestrictions_foodConsistencyRestricti_fkey" FOREIGN KEY ("foodConsistencyRestrictionId") REFERENCES "FoodConsistency"("consistency") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToAllergyRestrictions" ADD CONSTRAINT "RoomToAllergyRestrictions_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("roomNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToAllergyRestrictions" ADD CONSTRAINT "RoomToAllergyRestrictions_allergyRestricionId_fkey" FOREIGN KEY ("allergyRestricionId") REFERENCES "Allergy"("allergy") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToIntolleranceRestrictions" ADD CONSTRAINT "RoomToIntolleranceRestrictions_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("roomNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToIntolleranceRestrictions" ADD CONSTRAINT "RoomToIntolleranceRestrictions_intolleranceRestrictionId_fkey" FOREIGN KEY ("intolleranceRestrictionId") REFERENCES "Intolerance"("intolerance") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToDietaryneeds" ADD CONSTRAINT "RoomToDietaryneeds_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("roomNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomToDietaryneeds" ADD CONSTRAINT "RoomToDietaryneeds_dietaryNeedId_fkey" FOREIGN KEY ("dietaryNeedId") REFERENCES "DietaryNeeds"("dietaryNeed") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealToMealPlan" ADD CONSTRAINT "MealToMealPlan_mealPlanId_fkey" FOREIGN KEY ("mealPlanId") REFERENCES "MealPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealToMealPlan" ADD CONSTRAINT "MealToMealPlan_mealIdName_fkey" FOREIGN KEY ("mealIdName") REFERENCES "Meal"("mealName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("roomNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_mealPlanId_fkey" FOREIGN KEY ("mealPlanId") REFERENCES "MealPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
