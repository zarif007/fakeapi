import { Model, Types } from "mongoose";

export type IGenerator = {
    name: string;
    apiKey: string;
    enabled: boolean;
    author: Types.ObjectId;
    contributors: Types.ObjectId[];
    bluePrint: Types.ObjectId;
}

export type IGeneratorModel = Model<IGenerator, Record<string, unknown>>