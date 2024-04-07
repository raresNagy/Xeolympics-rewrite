import { serial, smallint, pgTable, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const team = pgTable("team", {
	id: serial("id"),
	number: smallint("number").notNull(),
	score: smallint("score"),
});

export const teamRelations = relations(team, ({ many }) => ({
	team: many(user),
}));
export const user = pgTable("user", {
	id: serial("id"),
	name: text("name"),
	email: text("email").unique().notNull(),
	password: text("password"),
	teamNumber: smallint("teamNumber"),
});

export const userRelations = relations(user, ({ one }) => ({
	team: one(team, {
		fields: [user.teamNumber],
		references: [team.number],
	}),
}));

export const problem = pgTable("problem", {
	id: serial("id"),
	title: text("title"),
	requirement: text("requirement"),
	points: smallint("points"),
});
