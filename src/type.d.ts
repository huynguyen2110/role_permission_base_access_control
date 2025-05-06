import { Request } from 'express'

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  pass_init: string;
  rank: number;
  scope: string[];
}

export interface AuthenticatedRequest extends Request {
  user?: any;
  token?: string;
}