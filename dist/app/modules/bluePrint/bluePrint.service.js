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
exports.BluePrintService = void 0;
const bluePrint_model_1 = require("./bluePrint.model");
const createBluePrint = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bluePrint_model_1.BluePrint.create(payload);
    return result;
});
const updateBluePrint = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bluePrint_model_1.BluePrint.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteBluePrint = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bluePrint_model_1.BluePrint.findByIdAndDelete({ _id: id }, payload);
    return result;
});
exports.BluePrintService = {
    createBluePrint,
    updateBluePrint,
    deleteBluePrint,
};
