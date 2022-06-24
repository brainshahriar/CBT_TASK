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
Object.defineProperty(exports, "__esModule", { value: true });
const UserServices_1 = __importDefault(require("../services/UserServices"));
class userController {
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserServices_1.default.postUser(req, res);
                return res.send({ status: "Data Inserted" });
            }
            catch (error) {
                console.log(error);
                return res.send({ status: "Server side error" });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserServices_1.default.getAllUser();
                if (!users) {
                    return res.send({ status: "Something error" });
                }
                res.status(200).json({
                    result: users,
                    message: "success",
                });
            }
            catch (error) {
                return res.send({ status: "Something error" });
            }
        });
    }
    getByid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const test = yield UserServices_1.default.getById(req, res);
                if (test) {
                    return res.send({ result: test });
                }
                else {
                    return res.send({ result: "Not found" });
                }
            }
            catch (error) {
                console.log(error);
                return res.send({ status: "Something error" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserServices_1.default.updateUser(req, res);
                return res.send({ status: "Updated" });
            }
            catch (error) {
                console.log(error);
                return res.send({ status: "Error" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserServices_1.default.delete(req, res);
                return res.send({ status: "Deleted" });
            }
            catch (error) {
                return res.send({ status: "Error" });
            }
        });
    }
}
exports.default = new userController();
