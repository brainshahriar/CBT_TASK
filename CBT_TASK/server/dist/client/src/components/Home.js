"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./Navbar"));
const axios_1 = __importDefault(require("axios"));
const Home = () => {
    const [userData, setuserData] = (0, react_1.useState)([]);
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default
            .get("http://localhost:8000/api/user/getall")
            .then((result) => {
            setuserData(result.data.result);
        })
            .catch((error) => {
            console.log(error.message);
        });
    });
    (0, react_1.useEffect)(() => {
        getData();
    }, []);
    const deleteRecord = (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default
            .delete(`http://localhost:8000/api/user/delete/${id}`)
            .then((result) => {
            alert("Deleted");
        })
            .catch((error) => {
            alert(error.message);
        });
        getData();
    });
    return (<>
      <div className="mt-5">
        <div className="container">
          <Navbar_1.default />
          <div className="add_btn mt-2 mb-2">
            <react_router_dom_1.Link to="/register" className="btn btn-primary">
              Add data
            </react_router_dom_1.Link>
          </div>
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData &&
            userData.map((element, id) => {
                return (<tr key={id}>
                      <th scope="row">{id + 1}</th>
                      <td>{element.title}</td>
                      <td>dsfsdf</td>
                      <td>
                        <img alt="" style={{ height: "100px", width: "100px" }} src={`http://localhost:8000/public/${element === null || element === void 0 ? void 0 : element.image}`}/>
                      </td>
                      <td className="d-flex justify-content-between">
                        <react_router_dom_1.Link to="">
                          {" "}
                          <button className="btn btn-success">View</button>
                        </react_router_dom_1.Link>
                        <react_router_dom_1.Link className="btn btn-primary" to={`/register/${element._id}`}>
                          {" "}
                          Edit
                        </react_router_dom_1.Link>
                        <button className="btn btn-danger" onClick={() => {
                        const confirmBox = window.confirm("Do you really want to delete " + element.title);
                        if (confirmBox === true) {
                            deleteRecord(element._id);
                        }
                    }}>
                          Delete
                        </button>
                      </td>
                    </tr>);
            })}
            </tbody>
          </table>
        </div>
      </div>
    </>);
};
exports.default = Home;
