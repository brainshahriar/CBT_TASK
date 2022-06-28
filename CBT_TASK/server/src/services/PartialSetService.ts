import partialsetModel from "../models/Partial_Set/PartialSchema";
import { Request, Response } from "express";

class partialsetService {
  static getAll = async () => {
    return await partialsetModel.find({}).exec();
  };

  static postSet = async (req: Request, res: Response) => {
    const newPost = new partialsetModel({
      ...req.body,
    });
    return await newPost.save();
  };
}

export default partialsetService;
