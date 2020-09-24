import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly user: string;
  readonly role: string;
  readonly pass: string;
  readonly firstName: string;
  readonly lastName: string;
}
