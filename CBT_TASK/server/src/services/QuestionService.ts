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
  static getById = async(req:Request,res:Response)=>{
    const id = req.params.id
    return await questionModel.findById({_id:id}).exec();
}


static updateQuestion = async (req: Request, res: Response) => {
  let newUser = req.body;
  return await questionModel.findByIdAndUpdate(req.params.id, newUser);
};

  static delete = async(req:Request,res:Response)=>{
    return await questionModel.findByIdAndDelete(req.params.id);
  }
}
export default questionService;
