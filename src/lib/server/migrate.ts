import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

const sql = neon(process.env.PGURL!);
const db = drizzle(sql);

const main = async () => {
	try {
		await migrate(db, { migrationsFolder: "drizzle" });
		console.log("✅ Migration Completed");
	} catch (error) {
		console.error("❌ Error during migtation:", error);
		process.exit(1);
	}
};

main();
