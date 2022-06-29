"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectdb_1 = __importDefault(require("./config/connectdb"));
const UserRoutes_1 = __importDefault(require("./src/routes/UserRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
// CORS Policy
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express_1.default.static('./public/uploads'));
// Database Connection
(0, connectdb_1.default)(DATABASE_URL);
// JSON
// app.use(express.json())
// Load Routes
app.use("/api/user", UserRoutes_1.default);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
