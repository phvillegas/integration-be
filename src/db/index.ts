import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

import { config } from '@config/env';
import * as users from './schema/users';
import * as roles from './schema/roles';
import * as relations from './schema/relations';

const schema = { ...users, ...roles, ...relations };

/**
 * Cache buffer for db connection
 */
const queryClient = postgres(config.db.url);
export const db = drizzle(queryClient, { schema });
