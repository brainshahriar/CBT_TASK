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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const UserSchema_1 = __importDefault(require("../models/User/UserSchema"));
const fs_1 = __importDefault(require("fs"));
class userService {
}
_a = userService;
userService.getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserSchema_1.default.find({}).exec();
});
userService.postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const newPost = new UserSchema_1.default(Object.assign(Object.assign({}, req.body), { image: (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename }));
    return yield newPost.save();
});
userService.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    return yield UserSchema_1.default.findOne({ _id: id }).exec();
});
userService.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let newUser = req.body;
    if (req.file && req.file.filename) {
        const img = yield UserSchema_1.default.findById(req.params.id);
        fs_1.default.unlink("./public/uploads/" + img.image, (err) => {
            if (err) {
                console.log(err);
            }
        });
        newUser = Object.assign(Object.assign({}, newUser), { image: req.file.filename });
    }
    return yield UserSchema_1.default.findByIdAndUpdate(req.params.id, newUser);
});
userService.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const img = yield UserSchema_1.default.findById(req.params.id);
    fs_1.default.unlink("./public/uploads/" + img.image, (err) => {
        if (err) {
            console.log(err);
        }
    });
    return yield UserSchema_1.default.findByIdAndDelete(req.params.id);
});
exports.default = userService;
