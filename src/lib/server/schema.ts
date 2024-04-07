import { serial, smallint, pgTable, text } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: serial("id"),
	name: text("name"),
	email: text("email"),
	password: text("password"),
	teamNumber: smallint("teamNumber"),
});

export const problem = pgTable("problem", {
	id: serial("id"),
	title: text("title"),
	requirement: text("requirement"),
	points: smallint("points"),
});
