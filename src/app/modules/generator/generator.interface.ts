import { Types } from "mongoose";

export type IGenerator = {
    name: string;
    apiKey: string;
    enabled: string;
    author: Types.ObjectId;
    contributors: Types.ObjectId[];
    schema: string;
}