import { db } from "../db";
import bcrypt from "bcrypt";
import { InsertUser, usersTable } from "../db/schema";
import { userRegistrationSchema } from "../schemas/user.schema";
import { eq } from "drizzle-orm";

export class UserService {
  static async register(user: InsertUser): Promise<any> {
    console.log(user);

    const userData = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, user.username))
      .execute();

    if (userData.length > 0) {
      return null;
    }

    userRegistrationSchema.parse(user);

    const saltRounds = 10;
    const hassedPassword = await bcrypt.hash(user.password, saltRounds);

    user.password = hassedPassword;

    try {
      return await db.insert(usersTable).values(user).execute();
    } catch (error) {
      throw error;
    }
  }

  static async login(user: InsertUser): Promise<any> {
    try {
      const [userData] = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.username, user.username))
        .limit(1)
        .execute();

      return userData;
    } catch (error) {
      throw error;
    }
  }
}
