"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constant_1 = require("./user.constant");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    role: {
        type: String,
        enum: user_constant_1.userRoles,
        default: 'user',
    },
    image: {
        type: String,
        default: 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg',
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    generators: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'Generator',
        default: [],
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
