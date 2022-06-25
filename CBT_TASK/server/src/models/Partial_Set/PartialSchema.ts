import mongoose from "mongoose";
import PartialSet from "./PartialInterface";

const partialSchema = new mongoose.Schema({
        name: { type: String},
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
                mark:{type:String},
                options: [
                  {
                    type: String,
                  },
                ],
            }
        ]
})

const partialModel = mongoose.model<PartialSet>("partial_set",partialSchema)

export default partialModel