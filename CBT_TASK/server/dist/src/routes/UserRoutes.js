"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({
    storage: storage
}).single("image");
//public route
router.post('/post', upload, UserController_1.default.post);
router.get('/getall', UserController_1.default.get);
router.get('/getall/:id', UserController_1.default.getByid);
router.put('/update/:id', upload, UserController_1.default.update);
router.delete('/delete/:id', UserController_1.default.delete);
// router.patch('/todoupdate/:id',upload,todoController.updateTodo)
exports.default = router;
