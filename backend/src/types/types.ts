import { Request } from 'express';

export interface CustomRequest extends Request {
  session: {
    user: UserData | null;
  };
}

export interface UserData {
  id: string;
  email: string;
  role: string;
}
