import setModel from "../models/Question_Set/SetSchema";
import { Request, Response } from "express"; 

class setService {
  static getAll = async () => {
    return await setModel.find({}).exec();
  };

  static postSet = async (req: Request, res: Response) => {
    const newPost = new setModel({
      ...req.body,
    });
    return await newPost.save();
  };
}

export default setService;
