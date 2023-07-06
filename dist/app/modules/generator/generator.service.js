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
const bluePrint_service_1 = require("../bluePrint/bluePrint.service");
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
const createGenerator = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bluePrintResult = yield bluePrint_service_1.BluePrintService.createBluePrint({});
    const result = yield generator_model_1.Generator.create(Object.assign(Object.assign({}, payload), { bluePrint: bluePrintResult._id }));
    return result;
});
const updateGenerator = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield generator_model_1.Generator.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteGenerator = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield generator_model_1.Generator.findByIdAndDelete({ _id: id }, payload);
    return result;
});
exports.GeneratorService = {
    getGenerators,
    getSingleGenerator,
    updateGenerator,
    createGenerator,
    deleteGenerator,
};
