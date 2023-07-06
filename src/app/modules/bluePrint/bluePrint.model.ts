import { Schema, model } from 'mongoose';
import { IBluePrint, IBluePrintModel } from './bluePrint.interface';

const BluePrintSchema = new Schema<IBluePrint, IBluePrintModel>(
  {
    key: {
      type: String,
      default: 'data',
    },
    value: {
      type: String,
      default: 'object',
    },
    type: {
      type: String,
      default: 'object',
    },
    children: {
      type: Object,
      default: {},
    },
    counter: {
      type: Number,
      default: -1,
    },
    showChildren: {
      type: Boolean,
      default: true,
    },
    copies: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const BluePrint = model<IBluePrint, IBluePrintModel>(
  'BluePrint',
  BluePrintSchema
);
