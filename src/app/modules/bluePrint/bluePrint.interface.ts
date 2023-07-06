import { Model } from 'mongoose';

export type IBluePrint = {
  id?: string;
  _id?: string;
  key: string;
  value: string;
  children: object;
  counter: number;
  type: string;
  showChildren: boolean;
  copies: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  _v?: number;
};

export type IBluePrintModel = Model<IBluePrint, Record<string, unknown>>;
