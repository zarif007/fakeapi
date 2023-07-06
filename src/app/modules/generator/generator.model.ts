import { Schema, model } from 'mongoose';
import { IGenerator, IGeneratorModel } from './generator.interface';

const GeneratorSchema = new Schema<IGenerator, IGeneratorModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    apiKey: {
      type: String,
      required: [true, 'ApiKey is required'],
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },
    contributors: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      required: [true, 'Contributors is required'],
    },
    bluePrint: {
      type: Schema.Types.ObjectId,
      ref: 'BluePrint',
      default: {},
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Generator = model<IGenerator, IGeneratorModel>(
  'Generator',
  GeneratorSchema
);
