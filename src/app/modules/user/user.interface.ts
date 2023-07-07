import { Model, Types } from 'mongoose';
import { IGenerator } from '../generator/generator.interface';

export type IUser = {
  id?: string;
  _id?: string;
  name: string;
  role: 'super_admin' | 'admin' | 'user' | 'pro_User';
  image: string;
  email: string;
  emailVerified: boolean;
  generators: IGenerator[] | Types.ObjectId[] | [];
  createdAt?: Date;
  updatedAt?: Date;
  _v?: number;
};

export type IUserModel = Model<IUser, Record<string, unknown>>;
