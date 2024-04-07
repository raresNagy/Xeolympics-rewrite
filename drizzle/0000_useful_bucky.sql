CREATE TABLE IF NOT EXISTS "problem" (
	"id" serial NOT NULL,
	"title" text,
	"requirement" text,
	"points" smallint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "team" (
	"id" serial NOT NULL,
	"number" smallint NOT NULL,
	"score" smallint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"password" text,
	"teamNumber" smallint,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
