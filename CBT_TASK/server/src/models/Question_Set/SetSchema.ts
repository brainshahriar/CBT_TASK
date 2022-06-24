import mongoose from "mongoose";
import Set from "./SetInterface";

const userSchema = new mongoose.Schema({
        name: { type: String},
        deadline: { type: String },
        status:{ type:Boolean,default:true},
        technology: { type: String },
        job_rank: { type: String },
        difficulty: { type: String },
        questions:[
            {
                bank_id:{
                    type:mongoose.Types.ObjectId,
                    ref:"question"
                },
                technology: { type: String },
                question_type: { type: String },
                job_rank: { type: String },
                difficulty: { type: String },
                isFromQuestionBank:{type:String},
                question_body: { type: String },
                remarks: { type: String },
                answer: { type: String },
                options: [
                  {
                    type: String,
                  },
                ],
            }
        ]
})

const userModel = mongoose.model<Set>("question_set",userSchema)

export default userModel