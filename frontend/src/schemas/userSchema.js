import { z } from "zod";

export const userRegistrationSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(16, "Username cannot exceed 16 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
