
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
-- TROLL table might need to get rid of accessory, background
CREATE TABLE "troll" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) UNIQUE NOT NULL,
	"description" VARCHAR (255),
	"created" TIMESTAMP,
	"element" VARCHAR (80),
	"head" VARCHAR (80),
	"body" VARCHAR (80),
	"accessory" VARCHAR (80),
	"background" VARCHAR (80),
	"user_id" INTEGER,
	"image" VARCHAR (255)
);

CREATE TABLE "likes" (
	"id" SERIAL PRIMARY KEY,
	"likes" INTEGER,
	"user_id" INTEGER,
	"troll_id" INTEGER
	);