"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BluePrint = void 0;
const mongoose_1 = require("mongoose");
const BluePrintSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.BluePrint = (0, mongoose_1.model)('BluePrint', BluePrintSchema);
