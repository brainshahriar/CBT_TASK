import setModel from "../models/Question_Set/SetSchema";
import { Request, Response } from "express"; 

class setService {
  static getAllUser = async () => {
    return await setModel.find({}).exec();
  };

  static postSet = async (req: Request, res: Response) => {
    const newPost = new setModel({
      ...req.body,
    });
    return await newPost.save();
  };

  // static getById = async (req: Request, res: Response) => {
  //   const id = req.params.id;
  //   return await userModel.findOne({ _id: id }).populate('questions').exec();
  // };

  // static updateUser = async (req: Request, res: Response) => {
  //   let newUser = req.body;
  //   if (req.file && req.file.filename) {
  //     const img: any = await userModel.findById(req.params.id);
  //     fs.unlink("./public/uploads/" + img.image, (err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //     newUser = {
  //       ...newUser,
  //       image: req.file.filename,
  //     };
  //   }
  //   return await userModel.findByIdAndUpdate(req.params.id, newUser);
  // };

  // static delete = async (req: Request, res: Response) => {
  //   const img: any = await userModel.findById(req.params.id);
  //   fs.unlink("./public/uploads/" + img.image, (err) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   });
  //   return await userModel.findByIdAndDelete(req.params.id);
  // };
}

export default setService;
