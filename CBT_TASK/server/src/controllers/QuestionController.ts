import { Request, Response } from "express";
import questionModel from "../models/Questions/QuestionSchema";
import questionService from "../services/QuestionService";
class questionController {
  static questionPost = (req: Request, res: Response) => {
    try {
      questionService.post(req, res);
      return res.send({ status: "Data Inserted" });
    } catch (error) {
      console.log(error);
      return res.send({ status: "Server Error" });
    }
  };
  static gellAllQuestion = async (req: Request, res: Response) => {
    try {
      let questions;
      
      const { technology } = req.query;
      if (technology === "all") {
        questions = await questionService.getAllQuestion();
      } 
      else {
        questions = await questionService.getAllQuestionWithQuery(req.query);
      }
      if (!questions) {
        return res.send({ status: "Something error" });
      }
      res.status(200).json({
        result: questions,
        message: "success",
      });
    } catch (error) {
      return res.send({ status: "Something error" });
    }
  };

  static getByid = async (req: Request, res: Response) => {
    try {
      const test = await questionService.getById(req, res);
      if (test) {
        return res.send({ result: test });
      } else {
        return res.send({ result: "Not found" });
      }
    } catch (error) {
      console.log(error);
      return res.send({ status: "Something error" });
    }
  };

  static update = async (req: Request, res: Response) => {
    try {
      await questionService.updateQuestion(req, res);
      return res.send({ status: "Updated" });
    } catch (error) {
      console.log(error);
      return res.send({ status: "Error" });
    }
  };

  static delete = async (req: Request, res: Response) => {
    try {
      await questionService.delete(req, res);
      return res.send({ status: "Deleted" });
    } catch (error) {
      return res.send({ status: "Error" });
    }
  };
}

export default questionController;
