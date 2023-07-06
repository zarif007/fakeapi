"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const mongoose_1 = require("mongoose");
const GeneratorSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required'],
    },
    contributors: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'User',
        required: [true, 'Contributors is required'],
    },
    bluePrint: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'BluePrint',
        default: {},
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Generator = (0, mongoose_1.model)('Generator', GeneratorSchema);
