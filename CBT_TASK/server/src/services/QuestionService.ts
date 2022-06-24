import { Request, Response } from "express";
import questionModel from "../models/Questions/QuestionSchema";
class questionService {
  static post = async (req: Request, res: Response) => {
    const newPost = new questionModel({ ...req.body });
    const savePost = await newPost.save();
    return savePost;
  };
  static getAllQuestion = async () => { 
    return await questionModel.find({}).exec();
  };
  static getAllQuestionWithQuery = async(query:any)=>{
    return await questionModel.find(query).exec();
  }
  static getById = async (res: Response, req: Request) => {
    const id = req.params.id;
    return await questionModel.findById({ _id: id }).exec();
  };
}
export default questionService;
