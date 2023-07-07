"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateApiKey = void 0;
const generateApiKey = () => {
    const key = Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    return key;
};
exports.generateApiKey = generateApiKey;
