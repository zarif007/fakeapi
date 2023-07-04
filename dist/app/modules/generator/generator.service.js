"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorService = void 0;
const generator_model_1 = require("./generator.model");
const getGenerators = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield generator_model_1.Generator.find({})
        .populate('author')
        .populate('contributors')
        .populate('bluePrint');
    return result;
});
const getSingleGenerator = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield generator_model_1.Generator.findById(id)
        .populate('author')
        .populate('contributors')
        .populate('bluePrint');
    return result;
});
exports.GeneratorService = {
    getGenerators,
    getSingleGenerator,
};
