"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.todoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, 'title is requierd!'],
    },
    user_id: {
        type: mongoose_1.default.Schema.ObjectId,
        require: [true, 'user is requierd!']
    }
});
