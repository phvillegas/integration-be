import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config();

export default defineConfig({
    strict: true,
    verbose: true,
    out: './drizzle',
    dialect: 'postgresql',
    schema: [
        './src/db/schema/users.ts',
        './src/db/schema/roles.ts',
        './src/db/schema/relations.ts',
    ],
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
