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
const createObjectURL = require("create-object-url");
const Register = () => {
    let navigate = (0, react_router_dom_1.useNavigate)();
    let { id } = (0, react_router_dom_1.useParams)();
    const imageRef = (0, react_1.useRef)(null);
    const [defaultData, setDefaultData] = (0, react_1.useState)({});
    const [imgPreview, setImgPreview] = (0, react_1.useState)("");
    const [postValue, setValue] = (0, react_1.useState)({
        title: "",
        description: "",
    });
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default
            .get(`http://localhost:8000/api/user/getall/${id}`)
            .then((result) => {
            var _a;
            setDefaultData(result.data.result);
            setImgPreview((_a = result.data.result) === null || _a === void 0 ? void 0 : _a.image);
        })
            .catch((error) => {
            console.log(error);
        });
    });
    (0, react_1.useEffect)(() => {
        getData();
    }, [id]);
    // console.log(defaultData && defaultData);
    const handleData = (e) => {
        const { name, value } = e.target;
        setValue((val) => {
            return Object.assign(Object.assign({}, val), { [name]: value });
        });
    };
    const [image, setImage] = (0, react_1.useState)({});
    const handleSubmit = (e) => {
        e.preventDefault();
        let formTable = new FormData();
        if (postValue.title) {
            formTable.append("title", postValue.title);
        }
        if (postValue.description) {
            formTable.append("description", postValue.description);
        }
        if (image) {
            formTable.append("image", image);
        }
        const createTable = () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: "post",
                url: "http://localhost:8000/api/user/post",
                data: formTable,
                headers: {
                    "Content-Type": `multipart/form-data`,
                },
            });
        });
        createTable();
        alert("Inserted");
        // var dirtyFormID = 'myform';
        // var resetForm:any= document.getElementById(dirtyFormID);
        // resetForm.reset();
        // setValue({
        //     title: "",
        //     description: "",
        //   })
        //   setImage({})
        navigate("/home");
    };
    return (<>
      <div className="container">
        <Navbar_1.default />
        <react_router_dom_1.NavLink to="/">home</react_router_dom_1.NavLink>
        <form className="mt-4" id="myform" onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Title</label>
              <input defaultValue={defaultData && defaultData.title} type="text" name="title" className="form-control" onChange={handleData}/>
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label className="form-label">Description</label>
              <textarea name="description" defaultValue={defaultData && defaultData.description} className="form-control" onChange={handleData} cols={30} rows={5}></textarea>
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label className="form-label">Image</label>
              <div className="image-div" onClick={() => { var _a; return (_a = imageRef.current) === null || _a === void 0 ? void 0 : _a.click(); }}>
                {imgPreview ? (<img className="previewImg" src={typeof imgPreview === "object"
                ? createObjectURL(imgPreview)
                : `http://localhost:8000/public/${imgPreview}`} alt=""/>) : (<p>Selet Image</p>)}
              </div>
              <input type="file" name="image" style={{ display: "none" }} ref={imageRef} onChange={(e) => {
            setImage(e.currentTarget.files[0]);
            setImgPreview(e.currentTarget.files[0]);
        }} className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>);
};
exports.default = Register;
