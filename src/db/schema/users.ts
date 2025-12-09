import { pgTable, timestamp, varchar, boolean, integer, uuid } from 'drizzle-orm/pg-core';
import { roles } from './roles';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  isActive: boolean('is_active').default(true).notNull(),
  roleId: integer('role_id').references(() => roles.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
