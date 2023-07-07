import { Schema, model } from 'mongoose';
import { IGenerator, IGeneratorModel } from './generator.interface';
import { generateApiKey } from './generator.utils';

const GeneratorSchema = new Schema<IGenerator, IGeneratorModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    apiKey: {
      type: String,
      unique: true,
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

GeneratorSchema.pre('save', function (next) {
  this.contributors = [this.author];
  this.apiKey = generateApiKey();
  next();
});

export const Generator = model<IGenerator, IGeneratorModel>(
  'Generator',
  GeneratorSchema
);
