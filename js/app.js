"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 1415;
app.use(express_1.default.json());
// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
//app.use('/user', require('./routers/userRoute'))
// app.get('/', (req, res) => {
//     res.send('Hello, Swagger!');
//   });
app.listen(port, () => console.log(`server running on port ${port}`));
