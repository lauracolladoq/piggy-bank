import { z } from 'zod';

// Reglas generales.
export const baseUserSchema = z.object({
  username: z
    .string()
    .min(3, 'The username must be at least 3 characters long')
    .max(16, 'The username cannot exceed 16 characters'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email('The email address in invalid'),
  password: z
    .string()
    .min(8, 'The password must be at least 8 characters long'),
  avatar: z.string().optional(),
});

// Reglas para el registro de usuario.
export const userRegisterSchema = baseUserSchema.pick({
  username: true,
  email: true,
  password: true,
});

// Reglas para el inicio de sesión.
export const userLoginSchema = baseUserSchema
  .pick({
    email: true,
    password: true,
  })
  .extend({
    email: z
      .string()
      .email('The email address in invalid')
      .min(1, 'The email is required'),
    password: z.string().min(1, 'The password is required'),
  });

// Reglas para la actualización el perfil.
export const userProfileUpdateSchema = baseUserSchema.partial();
