import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: integer("id").primaryKey(),
  username: text("username").unique().notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  avatar: text("avatar").notNull().default("default.jpg"),
  role: text("role").notNull().default("user"),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
