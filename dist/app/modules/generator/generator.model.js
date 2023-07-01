'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Generator = void 0;
const mongoose_1 = require('mongoose');
const GeneratorSchema = new mongoose_1.Schema({
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
    type: mongoose_1.Schema.Types.ObjectId,
    required: [true, 'author is required'],
  },
  contributors: {
    type: [mongoose_1.Schema.Types.ObjectId],
    required: [true, 'contributors is required'],
  },
  bluePrint: {
    type: mongoose_1.Schema.Types.ObjectId,
    required: [true, 'contributors is required'],
  },
});
exports.Generator = (0, mongoose_1.model)('Generator', GeneratorSchema);
