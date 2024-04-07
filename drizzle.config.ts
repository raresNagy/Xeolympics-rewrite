import type { Config } from "drizzle-kit";

export default {
	schema: "./src/lib/server/schema.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		user: process.env.PGUSER!,
		password: process.env.PGPASSWORD!,
		host: process.env.PGHOST!,
		database: process.env.PGDATABASE!,
	},
} satisfies Config;
