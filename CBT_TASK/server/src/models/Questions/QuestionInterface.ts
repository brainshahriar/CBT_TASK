import { Document } from "mongoose";

export default interface Question extends Document{
    technology:string,
    question_type:string,
    job_rank:string,
    difficulty:string,
    isFromQuestionBank:string,
    question_used_count:number,
    question_body:string,
    remarks:string,
    answer:string,
    options:object,
}