import technologyModel from "../../models/Technology/TechnologySchema";
import { Request, Response } from "express"; 

class technologyService {
  static getAll = async () => {
    return await technologyModel.find({}).exec();
  };

  static post = async (req: Request, res: Response) => {
    const newPost = new technologyModel({
      ...req.body
    });
    return await newPost.save();
  };


  static delete = async (req: Request, res: Response) => {
    return await technologyModel.findByIdAndDelete(req.params.id);
  };
}

export default technologyService;
