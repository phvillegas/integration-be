import { pgTable, text, timestamp, varchar, boolean, integer } from 'drizzle-orm/pg-core';
import { roles } from './roles';

export const users = pgTable('users', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  roleId: integer('role_id').references(() => roles.id),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: text('name'),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
