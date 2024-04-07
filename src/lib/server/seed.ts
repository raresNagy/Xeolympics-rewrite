import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { user, team, problem } from './schema';

const sql = neon(process.env.PGURL!);
const db = drizzle(sql);

async function seed() {
	await db.insert(user).values([
		{
			name: 'Rares',
			email: 'rares.nagy@gmail.com',
			password: 'simona20',
			teamNumber: 19234
		},
		{
			name: 'Eva',
			email: 'eva@gmail.com',
			password: 'parola',
			teamNumber: 19234
		},
		{
			name: 'Anda',
			email: 'andastefanasan@gmail.com',
			password: 'funditaroz',
			teamNumber: 14278
		}
	]);

	await db.insert(team).values([
		{
			number: 14278,
			score: 0
		},
		{
			number: 19234,
			score: 10
		}
	]);

	await db.insert(problem).values([
		{
			title: 'Example problem',
			requirement: 'Solve this problem',
			points: 10
		}
	]);
}

async function main() {
	try {
		await seed();
		console.log('✅ Seeding complete');
	} catch (error) {
		console.error('❌ Error durring seeding:', error);
		process.exit(1);
	}
}

main();
