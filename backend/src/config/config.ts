import dotenv from 'dotenv';

// Carga las variables desde el .env.
dotenv.config();

// Da un valor por defecto a las variables de entorno
// si estas no están definidas en el .env.
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET_KEY =
  process.env.JWT_SECRET_KEY || 'default-secret-key';
