import { Document } from "mongoose";
import Question from "../Questions/QuestionInterface";

export default interface Set extends Document{
    name:string,
    status:boolean,
    technology:string,
    job_rank:string,
    difficulty:string,
    questions:[Question];
}