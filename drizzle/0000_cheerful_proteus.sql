CREATE TABLE IF NOT EXISTS "problem" (
	"id" serial NOT NULL,
	"title" text,
	"requirement" text,
	"points" smallint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"name" text,
	"email" text,
	"password" text,
	"teamNumber" smallint
);
