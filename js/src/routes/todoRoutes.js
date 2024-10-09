"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
// routes/sample.js
/**
 * @swagger
 * /createuser:
 *   post:
 *     summary: Returns a sample message
 *     responses:
 *       201:
 *         description: A successful response
 */
exports.router.post('/createtodo', () => { });
// routes/sample.js
/**
 * @swagger
 * /getall:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
exports.router.get('/getall', () => { });
