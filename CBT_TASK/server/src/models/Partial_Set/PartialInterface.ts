import { Document } from "mongoose";
import Question from "../Questions/QuestionInterface";

export default interface PartialSet extends Document{
    name:string,
    status:boolean,
    technology:string,
    job_rank:string,
    difficulty:string,
    numOfQuestion:string,
    questions:[Question];
}