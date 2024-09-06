import { z } from "zod";

export const userRegistrationSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(16, "Username cannot exceed 16 characters"),
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters long")
    .max(20, "First name cannot exceed 20 characters")
    .optional(),
  lastName: z
    .string()
    .min(3, "Last name must be at least 3 characters long")
    .max(20, "Last name cannot exceed 20 characters")
    .optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const userLoginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(16, "Username cannot exceed 16 characters"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
