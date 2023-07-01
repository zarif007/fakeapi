import { Schema, model } from 'mongoose';
import { IGenerator, IGeneratorModel } from './generator.interface';

const GeneratorSchema = new Schema<IGenerator, IGeneratorModel>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  apiKey: {
    type: String,
    required: [true, 'apiKey is required'],
  },
  enabled: {
    type: Boolean,
    required: [true, 'enabled is required'],
  },
  author: {
    type: Schema.Types.ObjectId,
    required: [true, 'author is required'],
  },
  contributors: {
    type: [Schema.Types.ObjectId],
    required: [true, 'contributors is required'],
  },
  bluePrint: {
    type: Schema.Types.ObjectId,
    required: [true, 'contributors is required'],
  },
});

export const Generator = model<IGenerator, IGeneratorModel>(
  'Generator',
  GeneratorSchema
);
