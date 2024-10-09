"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Todo_1 = require("./Todo");
exports.userSchema = new mongoose_1.default.Schema({
    user_name: {
        type: String,
        required: [true, 'user name is requierd!'],
        minlength: [5, 'too short name!']
    },
    todos: {
        type: [Todo_1.todoSchema]
    }
});
exports.userModel = mongoose_1.default.model('user', exports.userSchema);
