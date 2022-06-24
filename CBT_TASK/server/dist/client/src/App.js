"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home_1 = __importDefault(require("./components/Home"));
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Register_1 = __importDefault(require("./components/Register"));
const App = () => {
    return (<>
    <div className='App'>
    <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
            <react_router_dom_1.Route path="/home" element={<Home_1.default />}/>
            <react_router_dom_1.Route path="/register" element={<Register_1.default />}/>
            <react_router_dom_1.Route path="/register/:id" element={<Register_1.default />}/>
          </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
    </div>
    </>);
};
exports.default = App;
