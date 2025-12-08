import { db } from '@db/index';
import { users } from '@db/schema/users';
import { eq } from 'drizzle-orm';

export const userService = {
  async findAll() {
    return await db.query.users.findMany({
      with: {
        role: true,
      },
    });
  },

  async findById(id: number) {
    return await db.query.users.findFirst({
      where: eq(users.id, id),
      with: {
        role: true,
      },
    });
  },
};
