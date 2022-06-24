import mongoose from "mongoose";
import Question from "./QuestionInterface";

const questionSchema = new mongoose.Schema({
  technology: { type: String },
  question_type: { type: String },
  job_rank: { type: String },
  difficulty: { type: String },
  question_used_count: { type: Number, default: 0 },
  question_body: { type: String },
  remarks: { type: String },
  answer: { type: String },
  options: [
    {
      type: String,
    },
  ],
});

const questionModel = mongoose.model<Question>("question", questionSchema);

export default questionModel;
