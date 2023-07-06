import { Model, Types } from 'mongoose';
import { IBluePrint } from '../bluePrint/bluePrint.interface';

export type IGenerator = {
  id?: string;
  _id?: string;
  name: string;
  apiKey: string;
  enabled: boolean;
  author: Types.ObjectId;
  contributors: Types.ObjectId[];
  bluePrint: Types.ObjectId | object | IBluePrint;
  createdAt?: Date;
  updatedAt?: Date;
  _v?: number;
};

export type IGeneratorModel = Model<IGenerator, Record<string, unknown>>;
