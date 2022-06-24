import { Request, Response } from "express";
import questionService from "../services/QuestionService";
class questionController{
    static questionPost = (req:Request,res:Response) =>{
        try {
            questionService.post(req,res)
            return res.send({status:"Data Inserted"})
        } catch (error) {
            console.log(error);
            return res.send({status:"Server Error"})        
        }
    }
    static gellAllQuestion = async(req:Request,res:Response)=>{
        try {
            let questions;
            const {technology} = req.query;
            if(technology === "all"){         
                questions = await questionService.getAllQuestion();
            }
            else{   
                questions= await questionService.getAllQuestionWithQuery(req.query);
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
        }

        static getbyid = async(req:Request,res:Response)=>{
            try {
                const questions = await questionService.getById(res,req)
                if(questions){
                    return res.send({ status: questions });
                }
            } catch (error) {
                return res.send({ status: "Something error" });
            }
        }
    }

export default questionController